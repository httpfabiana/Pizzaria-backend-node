
import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController {
  async handle(req: Request, res: Response){
    const {name, price, description, category_id} = req.body;

    if(!req.file){
      throw new Error("A imagem do produto e obrigatória")
    }

    const productService = new CreateProductService();

    const createProduct = await productService.execute({
     name: name,
     price: parseInt(price),
     description: description,
     category_id: category_id,
     imageBuffer: req.file.buffer,
     imageName: req.file.originalname
    });

    return res.json({ createProduct})
  }
}

export { CreateProductController}