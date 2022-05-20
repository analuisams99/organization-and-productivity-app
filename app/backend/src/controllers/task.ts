import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import service from '../services/task'

export const getAll = async (_req: Request, res: Response) => {
  const result = await service.getAll();
  return res.status(StatusCodes.OK).json(result)
}
