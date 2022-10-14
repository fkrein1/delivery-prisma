import { Request, Response } from 'express';
import { UpdateDeliveryManUseCase } from './updateDeliveryManUseCase';

export class UpdateDeliveryManController {
  async handle(req: Request, res: Response) {
    const { id: id_delivery } = req.params;
    const { id_deliveryman } = req;
    const updateDeliveryManUseCase = new UpdateDeliveryManUseCase();
    const result = await updateDeliveryManUseCase.execute({
      id_delivery,
      id_deliveryman,
    });
    return res.status(201).json(result);
  }
}
