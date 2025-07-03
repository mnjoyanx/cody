"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@codifyer/sidebar";
// import { Card } from "@repo/ui";
import { Button } from "@repo/ui/button";
import { Tabs, Tab } from "@heroui/tabs";
import { MapPinned, MapPinOff, PanelRight } from "lucide-react";

import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  type Edge,
} from "@xyflow/react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/resizable";

import { nodeTypes } from "@components/nodes";
import { initialEdges, edgeTypes } from "@components/edges";
import type { AppNode } from "@components/nodes/types";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@api/types";
import { CodeBlock } from "@repo/code/index";
import { ChatContainer } from "@repo/chat";
import axios from "axios";

import "@xyflow/react/dist/style.css";

const BASE_URL = "https://api.codifyer.io/api";
const HARDCODED_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTc0NjcxNjQ4MH0.jAGfFKf6fgpMtG742Q2tk9EYDOb2ZBrxkTbx0m1JLu43u6Dx2MosEGdtDPnnm_xSrHF1ZCGHWVtCYmtZI691nrliJGveghQtDvvwO-eW-mC8NhHAFLvqY4x2Tk9EH4SpjyypYKNynYzyE0ouLCCehBlTy6X82gbkaUTGA6Hh0TD8wByv-MFKcO8SCY0sg0e97uqTUFgHjHAckY0nUay9AMSxCdkNxq2u4dTtkTcJ3Ic7Mye4VAWLu5Jo9I2RjIy-PZI6fFVW4OObC1yV_Sv4x-hWmsOgt-t-mx0_DkdDEDtrxQ7_DrBvC-nKYuon_gvextzOVKzxkOynEqYlntIB4Q";

async function fetchProjects(): Promise<Project[]> {
  const res = await axios.get(`${BASE_URL}/projects`, {
    headers: {
      Authorization: HARDCODED_TOKEN,
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

async function fetchProjectById(id: number): Promise<Project> {
  const res = await axios.get(`${BASE_URL}/projects/${id}`, {
    headers: {
      Authorization: HARDCODED_TOKEN,
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

export default function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showMinimap, setShowMinimap] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [showChat, setShowChat] = useState(true);

  const onConnect: OnConnect = useCallback(
    (connection) =>
      setEdges((edges) => {
        console.log("connection", connection);
        return addEdge(connection, edges);
      }),
    [setEdges]
  );

  const toggleMinimap = useCallback(() => {
    setShowMinimap((prev) => !prev);
  }, []);

  const toggleCode = useCallback(() => {
    setShowCode((prev) => !prev);
  }, []);

  const toggleChat = useCallback(() => {
    setShowChat((prev) => !prev);
  }, []);

  const handleSendMessage = useCallback((message: string) => {
    console.log("Message sent:", message);
    // TODO: Implement chat functionality with AI
  }, []);

  // Fetch all projects
  const {
    data: projects,
    isLoading: isLoadingProjects,
    error: errorProjects,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  // Get first project id
  const firstProjectId =
    projects && projects.length > 0 ? projects[0]?.id : null;

  // Fetch first project details
  const {
    data: project,
    isLoading: isLoadingProject,
    error: errorProject,
  } = useQuery<Project>({
    queryKey: ["project", firstProjectId],
    queryFn: () => fetchProjectById(firstProjectId!),
    enabled: !!firstProjectId,
  });

  // Map tables to nodes and edges
  useEffect(() => {
    if (project) {
      // Nodes
      const tableNodes: AppNode[] = project.tables.map((table) => ({
        id: String(table.id),
        type: "table",
        position: table.position
          ? table.position
          : { x: table.posX ?? 0, y: table.posY ?? 0 },
        data: {
          label: table.name,
          color: table.color,
          fields: table.fields,
        },
      }));
      setNodes(tableNodes);

      // Edges (foreign key relationships)
      const tableIdMap = new Map(project.tables.map((t) => [t.id, t.id]));
      const edges: Edge[] = [];
      project.tables.forEach((table) => {
        table.fields.forEach((field) => {
          if (field.foreignKey && field.foreignKeyUid) {
            const targetTableId = tableIdMap.get(Number(field.foreignKeyUid));
            if (targetTableId) {
              edges.push({
                id: `e${table.id}-${targetTableId}-${field.id}`,
                source: String(table.id),
                target: String(targetTableId),
                label: field.name,
                animated: true,
              });
            }
          }
        });
      });
      setEdges(edges);
    }
  }, [project, setNodes, setEdges]);

  if (isLoadingProjects)
    return <div style={{ padding: 32 }}>Loading projects...</div>;
  if (errorProjects)
    return (
      <div style={{ padding: 32, color: "red" }}>
        Error loading projects:{" "}
        {errorProjects instanceof Error ? errorProjects.message : ""}
      </div>
    );
  if (isLoadingProject)
    return <div style={{ padding: 32 }}>Loading project details...</div>;
  if (errorProject)
    return (
      <div style={{ padding: 32, color: "red" }}>
        Error loading project:{" "}
        {errorProject instanceof Error ? errorProject.message : ""}
      </div>
    );
  if (!project) return <div style={{ padding: 32 }}>No project found</div>;

  return (
    <div className="w-full h-screen flex bg-[#020817]">
      <Sidebar />

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={showChat ? 100 : 25} className="relative">
          {/* Toggle buttons - always visible */}
          {showChat ? (
            <div className="absolute right-4 top-4 z-10 flex gap-2">
              <Button onClick={toggleChat} variant="outline" size="sm">
                Preview
              </Button>
            </div>
          ) : null}

          <ChatContainer
            messages={[
              {
                id: "1",
                content: "Hello! How can I help you?",
                isUser: false,
                timestamp: new Date().toLocaleTimeString(),
              },
            ]}
            onSendMessage={handleSendMessage}
          />
        </ResizablePanel>

        {!showChat && (
          <>
            <ResizableHandle className="bg-gray-800/90" />
            <ResizablePanel defaultSize={75} className="relative">
              <div className="h-[calc(100vh-100px)] mt-10">
                <div className="absolute left-4 top-4 z-10 flex gap-2">
                  {!showChat && (
                    <div className="flex gap-2 items-center">
                      <PanelRight
                        className="w-5 h-5 text-gray-400 cursor-pointer"
                        onClick={() => setShowChat(true)}
                      />
                      <Tabs
                        selectedKey={showCode ? "code" : "preview"}
                        onSelectionChange={(key: string | number) =>
                          setShowCode(key === "code")
                        }
                        size="sm"
                        variant="bordered"
                        classNames={{
                          tabList:
                            "bg-gray-800/90 backdrop-blur-sm rounded-full",
                          tab: "text-gray-400 data-[selected=true]:text-white",
                          tabContent: "text-inherit",
                          cursor: "bg-blue-600",
                        }}
                      >
                        <Tab
                          key="preview"
                          title={
                            <div className="flex items-center gap-2">
                              Preview
                            </div>
                          }
                        />
                        <Tab key="code" title="Code" />
                      </Tabs>
                    </div>
                  )}
                </div>

                <div className="absolute right-4 top-4 z-10 flex gap-2">
                  {!showCode && (
                    <Button
                      onClick={toggleMinimap}
                      variant="outline"
                      size="icon"
                      className="rounded-full w-10 h-10 bg-gray-800/90"
                    >
                      {showMinimap ? (
                        <MapPinOff className="w-4 h-4" />
                      ) : (
                        <MapPinned className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>

                {/* Content */}
                {showCode ? (
                  <div className="h-full p-4 overflow-auto pt-12">
                    <CodeBlock
                      code={JSON.stringify(nodes, null, 2)}
                      language="json"
                    />
                  </div>
                ) : (
                  <div className="h-full">
                    <ReactFlow
                      nodes={nodes}
                      nodeTypes={nodeTypes}
                      onNodesChange={onNodesChange}
                      edges={edges}
                      edgeTypes={edgeTypes}
                      onEdgesChange={onEdgesChange}
                      onConnect={onConnect}
                      fitView
                    >
                      {/* <Background bgColor="rgb(2, 8, 23)" /> */}
                      {showMinimap && <MiniMap />}
                      <Controls />
                    </ReactFlow>
                  </div>
                )}
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
}
