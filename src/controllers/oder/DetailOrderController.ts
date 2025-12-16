import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
  async handle(req: Request, res: Response){
   const { order_id} = req.query;

   const detailOrderservice = new DetailOrderService();

   const detailOrder = await detailOrderservice.execute({
     order_id: order_id as string
   })

    return res.json({ detailOrder})
  }
}

export {DetailOrderController}