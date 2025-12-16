
import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer'
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { validateSchema } from "./middlewares/validateSchema";
import { isAdmin } from "./middlewares/isAdmin";
import { createUserSchema, authUserSchema } from "./schemas/userSchemas";
import { createCategorySchema } from "./schemas/categorySchema";
import { createProductSchema, listProductSchema, listProductByCategorySchema } from "./schemas/productSchemas";
import { createOrderSchema, addItemSchema, removeItemSchema, detailOrderSchema, 
 sendOrderSchema, finishOrderSchema, deleteOrderSchema} from "./schemas/orderSchema";
///////////////////////////////////////////////////////////////////////////////
import { CreateUserController } from "./controllers/user/CreateUserController"; 
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListaCategoryController } from "./controllers/category/ListarCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { CreateOrderController } from "./controllers/oder/CreateOrderController";
import { ListOrderController } from "./controllers/oder/ListOrderController";
import { AddItemOrderController } from "./controllers/oder/AddItemOrderController";
import { RemoveItemOrderController } from "./controllers/oder/RemoveItemOrderController";
import { DetailOrderController } from "./controllers/oder/DetailOrderController";
import { SendOrderController } from "./controllers/oder/SendOrderController";
import { FinishOrderController } from "./controllers/oder/FinishOrderController";
import { DeleteOrderController } from "./controllers/oder/DeleteOrderController";

const router = Router();
const upload = multer(uploadConfig)

//USER
router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle)
router.post("/session", validateSchema(authUserSchema), new AuthUserController().handle)
router.get("/me", isAuthenticated, new DetailUserController().handle)

//ROTA CATEGORY
router.post("/category", isAuthenticated, isAdmin,validateSchema(createCategorySchema), new CreateCategoryController().handle)
router.get("/category", isAuthenticated, new ListaCategoryController().handle)

//ROTA DE PRODUCT
router.post("/product", isAuthenticated, isAdmin, upload.single("file"), validateSchema(createProductSchema),new CreateProductController().handle)
router.get("/products", isAuthenticated, validateSchema(listProductSchema), new ListProductController().handle)
router.delete("/product", isAuthenticated, isAdmin, new DeleteProductController().handle)
router.get("/category/product", isAuthenticated,validateSchema(listProductByCategorySchema), new ListProductByCategoryController().handle)

//ROTA DE ORDERS
router.post("/order", isAuthenticated,validateSchema(createOrderSchema), new CreateOrderController().handle)
router.get("/orders", isAuthenticated, new ListOrderController().handle)

//ADICIONA ITEM A UM PEDIDO
router.post("/order/add", isAuthenticated,validateSchema(addItemSchema),new AddItemOrderController().handle)
router.delete("/order/remove", isAuthenticated, validateSchema(removeItemSchema), new RemoveItemOrderController().handle)
router.get("/order/detail", isAuthenticated, validateSchema(detailOrderSchema), new DetailOrderController().handle)
router.put("/order/send", isAuthenticated, validateSchema(sendOrderSchema), new SendOrderController().handle)
router.put("/order/finish", isAuthenticated, validateSchema(finishOrderSchema), new FinishOrderController().handle)
router.delete("/order", isAuthenticated, validateSchema(deleteOrderSchema), new DeleteOrderController().handle)

export { router }