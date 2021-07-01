import { Request, Response } from "express";
import { ListTagsUsedComplimentsService } from "../services/ListTagsUsedComplimentsService";


class ListTagsUsedComplimentsController {

  async handle(request: Request, response: Response) {

    const listTagsUsedCompliments = new ListTagsUsedComplimentsService();

    const tagsDistinctCompliments = await listTagsUsedCompliments.execute();

    return response.json(tagsDistinctCompliments);
  }
}

export { ListTagsUsedComplimentsController }