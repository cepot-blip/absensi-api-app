import express from "express"
import { AbsenMasukCreate, AbsenMasukDelete, AbsenMasukRead, AbsenMasukUpdate } from "../../controllers/AbsenMasuk"

const absen_masuk_routes = express.Router()

//      CREATE ROUTES USERS
absen_masuk_routes.post("/absen-masuk/create", AbsenMasukCreate)
absen_masuk_routes.post("/absen-masuk/read", AbsenMasukRead)
absen_masuk_routes.put("/absen-masuk/update", AbsenMasukUpdate)
absen_masuk_routes.delete("/absen-masuk/delete", AbsenMasukDelete)


export default absen_masuk_routes