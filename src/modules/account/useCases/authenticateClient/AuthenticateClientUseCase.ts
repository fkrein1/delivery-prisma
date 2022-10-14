import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface IClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IClient) {
    const client = await prisma.clients.findUnique({
      where: { username },
    });
    if (!client) {
      throw new AppError(401, 'Username or password invalid');
    }
    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) {
      throw new AppError(401, 'Username or password invalid');
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}
