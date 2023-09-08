export interface ListType {
  id: number;
  project: string;
  title: string;
  description: string;
  func: FunctionType[];
}

export interface FunctionType {
  id: number;
  title: string;
  description: string;
}
