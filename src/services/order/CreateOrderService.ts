import prismaClient from "../../prisma";

interface CreateOrderProps {
  name?: string;
  table: number;
}

class CreateOrderService {
  async execute({name, table}: CreateOrderProps){
    try{
     const createOrder = await prismaClient.order.create({
     data: {
      name: name ?? "",
      table: table
      },
      select: {
       id: true,
       table: true,
       status: true,
       draft: true,
       name: true,
       createdAt: true
      }
    })

      return createOrder;

    }catch(err){
     throw new Error("Falhar ao criar pedido")
    }
  }
}

export {CreateOrderService}