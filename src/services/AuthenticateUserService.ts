import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se o e-mail existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("E-mail/Password incorrect")
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail/Password Incorrect");
    }

    // Gerar o Token 
    // 2º argumento foi gerado por site MD5 Generator
    // através da frase: darcionlwValoriza

    const token = sign({
      email: user.email
    }, "f46de7710dcb1420a974724c36217e9d", {
      subject: user.id,
      expiresIn: "1d"
    }
    );

    return token;

  }

}

export { AuthenticateUserService }