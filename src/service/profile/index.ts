export interface ProfileData {
  id: string;
  name: string;
  owner: {
    id: string;
  };
}

interface MetaData {
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

export interface ProfileDetailData extends ProfileData {
  metadata: MetaData;
  memberRole: {
    accounts: Account[];
  };
}
