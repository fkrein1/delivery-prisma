import { Request, Response } from 'express';
import { CreateDeliveryManUseCase } from './createDeliveryManUseCase';

export class CreateDeliveryManController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const createClientUseCase = new CreateDeliveryManUseCase();
    const result = await createClientUseCase.execute({ username, password });
    return res.status(201).json(result);
  }
}
