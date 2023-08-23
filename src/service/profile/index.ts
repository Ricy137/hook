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

export interface Account {
  id: string;
}

export interface ProfileDetailData extends ProfileData {
  metadata: MetaData;
  memberRole: {
    accounts: Account[];
  };
}
