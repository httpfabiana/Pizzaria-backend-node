import { Request, Response } from "express";
import { RemoveItemOrderService } from "../../services/order/RemoveItemOrderService";

class RemoveItemOrderController {
  async handle(req: Request, res: Response){
    const { item_id } = req.query;

    const removeItemService = new RemoveItemOrderService();

    const removeItem = await removeItemService.execute({
      item_id: item_id as string
    })

    return res.json({ removeItem})
  }
}

export {RemoveItemOrderController}