import { Request, Response } from "express";
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService";


class ListUserReceivedComplimentsController {

  async handle(request: Request, response: Response) {
    const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();

    const userReceivedCompliments = await listUserReceivedComplimentsService.execute();

    return response.json(userReceivedCompliments);
  }
}

export { ListUserReceivedComplimentsController }