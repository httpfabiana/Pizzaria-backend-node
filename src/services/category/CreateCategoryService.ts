import prismaClient from "../../prisma";

interface CreateCategory {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CreateCategory){

    try {
      const category = await prismaClient.category.create({
       data: {
         name: name,
       },
       select: {
        id: true,
        name: true,
        createdAt: true
       }
      })  

      return category;

    }catch(err){
      throw new Error("Falhar ao criar categoria")   
    }
  }
}

export { CreateCategoryService}