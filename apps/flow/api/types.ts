export interface Project {
  id: number;
  name: string;
  logo: string | null;
  categories: string;
  share_link: string;
  deployer_id: number | null;
  tables_count: number;
  field_count: number;
  status: number;
  deploy_state: string | null;
  created_type: "scratch" | "ai";
  is_generated: boolean;
  api_host: string;
  per_day_update_count: number;
  per_day_export_count: number;
  share_key: string;
  project_change_state: number;
  createdAt: string;
  updatedAt: string;
  members: ProjectMember[];
  deployer: any | null;
  nots: any[];
  tables: Table[];
}

export interface ProjectMember {
  id: number;
  user_id: number;
  project_id: number;
  role: string;
  color: string;
  position: number;
  is_creator: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Table {
  id: number;
  name: string;
  posX: number;
  posY: number;
  color: string;
  zIndex: number;
  comment: string;
  disabled: boolean;
  project_id: number;
  field_count: number;
  api_post: boolean;
  api_get: boolean;
  api_delete: boolean;
  api_put: boolean;
  icon: string | null;
  createdAt: string;
  updatedAt: string;
  fields: Field[];
  position?: {
    x: number;
    y: number;
  };
}

export interface Field {
  id: number;
  name: string;
  uid: number;
  allowNull: boolean;
  type: string;
  size: string;
  foreignKey: boolean;
  isFile: boolean;
  values: string | null;
  foreignKeyUid: string;
  disabled: boolean;
  tableId: number;
  position: number;
  color: string | null;
  defaultValue: string | null;
  comment: string | null;
  unique: boolean;
  as: string | null;
  is_index: boolean;
  is_enable_chart: boolean;
  chart_type: any[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectData {
  name: string;
  color: string;
  logo?: File;
  categories: string[];
}

export interface UpdateProjectData {
  name?: string;
  color?: string;
  logo?: File | "";
  categories?: string[];
}
