

  export interface SharingInfo {
    read_only: boolean;
    parent_shared_folder_id: string;
    modified_by: string;
  }

  export interface Dropboxfile {
    _tag: string;
    name: string;
    path_lower: string;
    path_display: string;
    parent_shared_folder_id: string;
    id: string;
    client_modified: Date;
    server_modified: Date;
    rev: string;
    size: number;
    sharing_info: SharingInfo;
  }

