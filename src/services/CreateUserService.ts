import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: String;
  email: String;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("E-mail incorreto");
    }

    const userAlreadyExist = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExist) {
      throw new Error("Usuário já existe")
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });

    usersRepository.save(user);

    return user;

  }
}

export { CreateUserService }