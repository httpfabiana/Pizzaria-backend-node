import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController{
  async handle(req: Request, res: Response) {
    const { table, name} = req.body;

   const createService = new CreateOrderService();

   const createOrder = await createService.execute({
    table: Number(table), 
    name
  });

   return res.json({ createOrder})
  }
}

export {CreateOrderController}