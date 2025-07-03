import type { NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import { TableNode } from "./types";

interface TableNodeComponentProps extends NodeProps<TableNode> {}

export function TableNodeComponent({
  data,
}: TableNodeComponentProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md p-4 border border-gray-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-[300px]">
      <div className="flex items-center justify-between mb-4 table-node-header">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          {data.label}
        </div>
        <div className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
          Table
        </div>
      </div>

      <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Fields
      </div>

      <ul className="space-y-2 w-full select-none">
        {data.fields && data.fields.length > 0 ? (
          data.fields.map((field) => (
            <li
              key={field.id}
              className="relative flex items-center bg-white rounded-lg p-2 group border border-gray-100 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/30 w-full"
            >
              <Handle
                type="target"
                position={Position.Left}
                id={String(field.id)}
                className="!w-2 !h-2 !border !bg-white !border-blue-400 transition-all duration-200 group-hover:!border-blue-500 group-hover:!bg-blue-50"
                isConnectable={true}
              />
              <div className="flex items-center space-x-2 w-full px-2">
                <span className="font-medium text-gray-700 group-hover:text-gray-900 text-sm">
                  {field.name}
                </span>
                {field.type && (
                  <span className="text-gray-400 text-xs group-hover:text-gray-500">
                    {field.type}
                  </span>
                )}
              </div>
              <Handle
                type="source"
                position={Position.Right}
                id={String(field.id)}
                className="!w-2 !h-2 !border !bg-white !border-blue-400 transition-all duration-200 group-hover:!border-blue-500 group-hover:!bg-blue-50"
                isConnectable={true}
              />
            </li>
          ))
        ) : (
          <li className="text-gray-400 text-sm italic px-3 py-2">
            No fields defined
          </li>
        )}
      </ul>
    </div>
  );
}
