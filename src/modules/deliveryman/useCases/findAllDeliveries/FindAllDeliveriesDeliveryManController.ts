import { Request, Response } from 'express';
import { FindAllDeliveriesDeliveryManUseCase } from './FindAllDeliveriesDeliveryManUseCase';

export class FindAllDeliveriesDeliveryManController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;
    const findAllDeliveriesDeliveryManUseCase =
      new FindAllDeliveriesDeliveryManUseCase();
    const result = await findAllDeliveriesDeliveryManUseCase.execute(id_deliveryman);
    return res.status(200).json(result);
  }
}
