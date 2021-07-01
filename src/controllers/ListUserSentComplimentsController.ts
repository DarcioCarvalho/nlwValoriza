import { Request, Response } from "express";
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";


class ListUserSentComplimentsController {

  async handle(request: Request, response: Response) {
    const listUserSentComplimentsService = new ListUserSentComplimentsService();

    const usersSentCompliments = await listUserSentComplimentsService.execute();

    return response.json(usersSentCompliments);
  }
}

export { ListUserSentComplimentsController }