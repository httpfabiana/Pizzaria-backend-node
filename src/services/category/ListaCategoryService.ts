import prismaClient from "../../prisma";


class ListaCategoryService {
 async execute(){
    try{
      const categories = await prismaClient.category.findMany({
       select:{
        id: true,
        name: true,
        createdAt: true
       },
        orderBy: {
          createdAt: "desc"
        }
      })

       return categories;

    }catch(err){
      throw new Error("Falhar ao buscar categorias")
    }
 }
}

 export { ListaCategoryService }