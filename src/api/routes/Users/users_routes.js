import express from "express"
import { UsersCreate, UsersLogin, UsersRead, UsersUpdate, UsersDelete } from "../../controllers/Users"
import { UsersReadById } from "../../controllers/Users/UsersReadById"

const users_routes = express.Router()

//      CREATE ROUTES USERS
users_routes.post("/users/create", UsersCreate)
users_routes.post("/users/login", UsersLogin)
users_routes.post("/users/read", UsersRead)
users_routes.get("/users/read-byid/:id", UsersReadById)
users_routes.put("/users/update", UsersUpdate)
users_routes.delete("/users/delete", UsersDelete)


export default users_routes