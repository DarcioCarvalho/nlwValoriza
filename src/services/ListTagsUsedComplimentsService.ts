import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"


class ListTagsUsedComplimentsService {

  async execute() {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const queryBuider = complimentsRepositories.createQueryBuilder("compliments")
      //      .select("DISTINCT tag_id")
      .select("tag_id")
      .addSelect("count(*)", "amount")
      .addGroupBy("tag_id");

    const tagsDistinctCompliments = queryBuider.getRawMany();

    console.log(queryBuider.getSql());

    return tagsDistinctCompliments;
  }
}

export { ListTagsUsedComplimentsService }