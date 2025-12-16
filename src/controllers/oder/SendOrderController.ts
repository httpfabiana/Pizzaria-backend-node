import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
  async handle(req: Request, res: Response){
    const { order_id, name} = req.body;
   
   const sendOrderService = new SendOrderService();

   const sendOrder = await sendOrderService.execute({
     name: name,
     order_id: order_id
   })

   return res.json({ sendOrder })
  }
}

export {SendOrderController}