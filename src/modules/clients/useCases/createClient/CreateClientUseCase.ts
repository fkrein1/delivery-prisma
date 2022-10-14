import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface IClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: IClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });
    if (clientExist) throw new AppError(401, 'username already exists');

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: { username, password: hashPassword },
    });
    return client;
  }
}
