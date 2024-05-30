import express from "express";
import {
  renderHome,
  rutaNoEncontrada,
  getPosts,
  addPost,
  editPostLike,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", renderHome);

// PREGUNTA 3: Disponibilizar una ruta GET /posts que utilice una función asíncrona para emitir una consulta SQL y devuelva todos los posts de la tabla posts. (4 Puntos)
// He creado la siguiente ruta:
router.get("/posts", getPosts);


// Pregunta 1: Disponibilizar una ruta POST /post que utilice una función asíncrona para emitir una consulta SQL parametrizada y almacenar un nuevo post en la tabla posts. (3 Puntos)
// ---paso 1---He creado la siguiente ruta que cumple lo solicitado:
router.post("/post", addPost);


// PREGUNTA 2: Disponibilizar una ruta PUT /post que utilice una función asíncrona para emitir una consulta SQL y 
// sume un like a un post identificado por su id. Considera que este dato es enviado como query strings. (3 Puntos)
// ---PASO 1---He creado la siguiente función que cumple lo solicitado:
router.put("/post", editPostLike);

router.get("/*", rutaNoEncontrada);

export default router;
