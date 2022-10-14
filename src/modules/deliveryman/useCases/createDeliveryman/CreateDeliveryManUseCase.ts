import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliveryManUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliveryManExists = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (deliveryManExists) throw new AppError(401, 'username already exists');

    const hashPassword = await hash(password, 10);

    const deliveryMan = await prisma.deliveryMan.create({
      data: { username, password: hashPassword },
    });
    return deliveryMan;
  }
}
