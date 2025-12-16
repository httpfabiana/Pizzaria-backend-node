import prismaClient from "../../prisma";
import cloudinary from "../../config/cloudinary";
import { Readable } from "stream";

interface CreateProductoProps {
  name: string;
  price: number;
  description: string;
  category_id: string;
  imageBuffer: Buffer;
  imageName: string;
}

class CreateProductService {
  async execute({name, price, description, category_id, imageBuffer, imageName}: CreateProductoProps){

   const categoryExist = await prismaClient.category.findFirst({
    where: {
      id: category_id
    }
   })

    if(!categoryExist){
      throw new Error("Categoria não encontrada")
    }

    let bannerUrl = "";

    try{
      const result = await new Promise<any>((resolve, rejeita) => {
       const uploadStream = cloudinary.uploader.upload_stream({
        folder: "product",
        resource_type: "image",
        public_id: `${Date.now()}-${imageName.split(".")[0]}`
       }, (error, result) => {
        if(error) rejeita(error);
        else resolve(result)
       })

       const bufferStream = Readable.from(imageBuffer)
       bufferStream.pipe(uploadStream)
      })

      bannerUrl = result.secure_url
      console.log(result)

    }catch(error){
     console.log(error)
     throw new Error("Error ao fazer o upload da imagem!")
    }

    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        description: description,
        banner: bannerUrl,
        category_id: category_id
      },
      select:{
       id: true,
       name: true,
       price: true,
       description: true,
       category_id: true,
       banner: true,
       createdAt: true
      }
    })

    return product;
  }
}

export { CreateProductService}

