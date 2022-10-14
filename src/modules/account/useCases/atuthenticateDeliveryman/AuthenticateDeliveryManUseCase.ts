import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface IDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliveryManUseCase {
  async execute({ username, password }: IDeliveryman) {
    const deliveryMan = await prisma.deliveryMan.findUnique({
      where: { username },
    });
    if (!deliveryMan) {
      throw new AppError(401, 'Username or password invalid');
    }
    const passwordMatch = await compare(password, deliveryMan.password);
    if (!passwordMatch) {
      throw new AppError(401, 'Username or password invalid');
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET_DELIVERYMAN as string, {
      subject: deliveryMan.id,
      expiresIn: '1d',
    });

    return token;
  }
}
