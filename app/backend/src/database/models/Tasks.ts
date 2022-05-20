import { INTEGER, Model, DATE, STRING } from 'sequelize';
import db from '.';

class Tasks extends Model {
  public id: number;

  public task: string;

  public status: string;
}

Tasks.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  task: {
    allowNull: false,
    type: STRING,
  },
  status: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Tasks',
  tableName: 'tasks',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false,
});

export default Tasks;
