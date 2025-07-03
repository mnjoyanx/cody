import type { Node, BuiltInNode } from "@xyflow/react";
import type { Field } from "@api/types";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;

// New complex node type
type ComplexNodeData = {
  title: string;
  description: string;
  status: "active" | "inactive" | "error";
  value: number;
};
export type ComplexNode = Node<ComplexNodeData, "complex">;

// Table node type for custom table nodes
export type TableNode = Node<
  { label: string; color: string; fields: Field[] },
  "table"
>;

export type AppNode =
  | BuiltInNode
  | PositionLoggerNode
  | ComplexNode
  | TableNode;
