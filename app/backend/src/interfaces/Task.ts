export default interface ITask {
  id: number;
  task: string;
  status: string;
}

export interface TaskReq {
  task: string;
  status: string;
}