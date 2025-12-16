import prismaClient from "../../prisma";

interface ListProductByCategoryProps {
  category_id: string;
}

class ListProductByCategoryService {
  async execute({category_id}: ListProductByCategoryProps){
    try{
      //Verificar se a categoria existe
      const category = await prismaClient.category.findUnique({
        where:{
          id: category_id
        }
      });

      if(!category){
        throw new Error("Categoria não encontrada")
      }

      //Buscar produtos da categoria (Apenas produtos ativos por padrão)
      const product = await prismaClient.product.findMany({
        where:{
          category_id: category_id,
          disabled: false  
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
            name: true,
          }
         }
        },
        orderBy:{
          createdAt: 'desc'
        }
      })

      return product;

    }catch(error){
      if(error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("Falhar ao buscar produtos da categoria")
    }
  }
}

export {ListProductByCategoryService}