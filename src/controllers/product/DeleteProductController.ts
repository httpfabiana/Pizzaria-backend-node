import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController {
 async handle(req: Request, res: Response){
   const product_id = req.query?.product_id as string;

   const deleteService = new DeleteProductService();

   const deleteProduct = await deleteService.execute({product_id: product_id});

   return res.json({ deleteProduct})
 }
}

export {DeleteProductController}