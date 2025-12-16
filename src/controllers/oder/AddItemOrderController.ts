import { Request, Response } from "express";
import { AddItemOrderService } from "../../services/order/AdditemOrderService";

class AddItemOrderController {
  async handle(req: Request, res: Response){
    const {order_id, product_id, amount} = req.body;

    const addService = new AddItemOrderService();

    const addItemOrder = await addService.execute({
     order_id: order_id,
     product_id: product_id,
     amount: amount
    });

    return res.json({ addItemOrder})
  }
}

export {AddItemOrderController}
