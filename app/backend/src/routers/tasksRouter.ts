import { Router } from 'express';
import { getAll } from '../controllers/task'

const router = Router();

router
  .get('/', getAll)
  .post('/',)
  .put('/:id')
  .patch('/:id')
  .delete('/:id');

export default router;