import prismaClient from "../../prisma";

interface ListProductProps {
  disabled?: string;
}

class ListProductService {
  async execute({ disabled}: ListProductProps){

    try{
     const product = await prismaClient.product.findMany({
      where: {
       disabled: disabled === "true" ? true : false,
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
        disabled: true,
        category_id: true,
        createdAt: true,
        category: {
         select: {
          id: true,
          name: true
         }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
     })

     return product;

    }catch(error){
      throw new Error("Error ao buscar produtos")
    }
  }
}

 export { ListProductService}