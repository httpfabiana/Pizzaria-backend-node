import multer from 'multer'

//USAR o memoryStorage pra manter o arquivo em memoria e enviar diretamente pro cloudinary

export default {
  storage: multer.memoryStorage(),
  limits: {
   fileSize: 4 * 1024 * 1024,
  },
  fileFilter: (req: any, file: Express.Multer.File, callback: any) => {
    const allowedMimes = ["image/jpeg", "image/jpeg", "image/png"]

    if(allowedMimes.includes(file.mimetype)) {
      callback(null, true)
    }else {
      callback(new Error("Formato de arquivo invalido,use apenas JPG, JPEG, PNG."))
    }
  }
}