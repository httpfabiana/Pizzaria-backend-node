import prismaClient from "../../prisma";

interface DeleteProductProps {
   product_id: string;  
}

class DeleteProductService {
  async execute({product_id}: DeleteProductProps){
   
   try{
     await prismaClient.product.update({
      where:{
        id: product_id
      }, 
      data:{
        disabled: true,
      }
     })

     return { message: "Produto deletado/arquivado com sucesso!"}

   }catch(error){
    console.log(error)
    throw new Error("Falhar ao deletar produto")
   }
  }
}
 
 export { DeleteProductService}