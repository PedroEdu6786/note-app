export type Memo = {
  memoId: string;
  title: string;
  description: string;
  creationDate: Date;
  groupId: string;
};

export type Group = {
  groupId: string;
  title: string;
  color: string;
  creationDate: Date;
};
