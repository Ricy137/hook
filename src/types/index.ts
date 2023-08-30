export interface MetaData {
  protocol: string;
  pointer: string;
}

export interface Role {
  id: string;
}

export interface Account {
  id: string;
  roles: Role[];
}
