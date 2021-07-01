import { QueryBuilder, getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserReceivedComplimentsService {

  async execute() {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const queryBuider = complimentsRepositories.createQueryBuilder()
      .select("DISTINCT user_receiver")
      .addSelect("count(*)", "amount")
      .addGroupBy("user_receiver");

    console.log(queryBuider.getSql());

    const usersReceivedCompliments = queryBuider.getRawMany();

    return usersReceivedCompliments;
  }
}

export { ListUserReceivedComplimentsService }