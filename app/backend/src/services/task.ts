import model from "../database/models/Tasks";
import ITask from "../interfaces/Task";

const getAll = async (): Promise<ITask[]> => {
  const allTasks = await model.findAll() as ITask[];
  return allTasks;
};

export default {
  getAll,
}