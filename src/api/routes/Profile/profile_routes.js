import express from "express"
import { ProfileCreate, ProfileDelete, ProfileRead, ProfileUpdate } from "../../controllers/Profile"

const profile_routes = express.Router()

profile_routes.post("/profile/create", ProfileCreate)
profile_routes.post("/profile/read", ProfileRead)
profile_routes.put("/profile/update", ProfileUpdate)
profile_routes.delete("/profile/delete", ProfileDelete)


export default profile_routes

