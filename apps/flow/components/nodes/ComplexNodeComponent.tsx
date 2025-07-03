import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { ComplexNode } from "./types";

export function ComplexNodeComponent({ data }: NodeProps<ComplexNode>) {
  return (
    <div
      style={{
        border: "2px solid #4A90E2",
        borderRadius: 8,
        padding: 16,
        background: "#f0f4fa",
        minWidth: 220,
        boxShadow: "0 2px 8px rgba(74,144,226,0.1)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: 18, marginBottom: 4 }}>
        {data.title}
      </div>
      <div style={{ color: "#666", marginBottom: 8 }}>{data.description}</div>
      <div style={{ marginBottom: 8 }}>
        <span>Status: </span>
        <span
          style={{
            color:
              data.status === "active"
                ? "green"
                : data.status === "error"
                ? "red"
                : "#999",
            fontWeight: "bold",
          }}
        >
          {data.status}
        </span>
      </div>
      <div style={{ fontSize: 14 }}>
        Value: <b>{data.value}</b>
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
