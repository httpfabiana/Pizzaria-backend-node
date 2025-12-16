import prismaClient from "../../prisma";

interface RemoveItemProps {
  item_id: string;
}

class RemoveItemOrderService {
  async execute({ item_id}: RemoveItemProps){

   try{
    const itemExist = await prismaClient.item.findFirst({
     where: {
       id: item_id,
     }
    })

    if(!itemExist) {
      throw new Error("Item não encontrado")
    }

    //Delete item
      await prismaClient.item.delete({
        where: {
          id: item_id
        }
      })

      return { message: "Item removido com sucesso"}

   }catch(err){
     throw new Error("Falhar ao remover item do pedido")
   }
  }
}

export { RemoveItemOrderService}