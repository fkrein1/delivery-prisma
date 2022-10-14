import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesDeliveryManUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliveryMan.findUnique({
      where: {
        id: id_deliveryman,
      },
      select: { id: true, username: true, Deliveries: true },
    });
    return deliveries;
  }
}
