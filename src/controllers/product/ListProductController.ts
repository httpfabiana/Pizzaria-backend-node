import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";


class ListProductController {
  async handle(req: Request, res: Response){
   const disabled = req.query.disabled as string | undefined;

   const listService = new ListProductService();

   const listProduct = await listService.execute({
     disabled: disabled 
   });

   return res.json({ listProduct })
  }
}

 export { ListProductController}