import { prisma } from '../../../../database/prismaClient';

interface IClient {
  id_client: string;
}

export class FindAllDeliveriesClientUseCase {
  async execute({ id_client }: IClient) {
    const deliveries = await prisma.clients.findMany({
      where: { id: id_client },
      select: { id: true, username: true, Deliveries: true },
    });
    return deliveries;
  }
}
