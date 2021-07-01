import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"


class ListUserSentComplimentsService {

  async execute() {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const queryBuilder = complimentsRepositories.createQueryBuilder("compliments")
      .select("DISTINCT user_sender")
      .addSelect("count(*)", "amount")
      .addGroupBy("user_sender");

    console.log(queryBuilder.getSql());

    const usersSentCompliments = queryBuilder.getRawMany();

    return usersSentCompliments;

  }
}

export { ListUserSentComplimentsService }