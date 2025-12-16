import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response){
    const { name } = req.body;

    const createService = new CreateCategoryService();

    const createCategory = await createService.execute({ name: name});

    return res.json({ createCategory})
  }
}

export { CreateCategoryController}