import { Request, Response } from "express";
import { ListaCategoryService } from "../../services/category/ListaCategoryService";


class ListaCategoryController {
  async handle(req: Request, res: Response){

    const listService = new ListaCategoryService();

    const listCategory = await listService.execute();

    return res.json({ listCategory})
  }
}

 export { ListaCategoryController}