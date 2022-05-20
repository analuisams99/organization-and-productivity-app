import express from 'express';
import taskRouter from './routers/tasksRouter'

const app = express();
app.use(express.json());

app.use('/tasks', taskRouter)

export default app;
