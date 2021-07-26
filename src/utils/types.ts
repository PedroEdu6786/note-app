export type Memo = {
  memoId: string;
  title: string;
  description: string;
  creationDate: Date;
  groupId: string;
};

export type Group = {
  groupId: number;
  name: string;
  color: string;
};
