import express from "express"
import { AbsenKeluarCreate, AbsenKeluarDelete, AbsenKeluarRead, AbsenKeluarUpdate } from "../../controllers/AbsenKeluar"

const absen_keluar_routes = express.Router()

//      CREATE ROUTES USERS
absen_keluar_routes.post("/absen-keluar/create", AbsenKeluarCreate)
absen_keluar_routes.post("/absen-keluar/read", AbsenKeluarRead)
absen_keluar_routes.put("/absen-keluar/update", AbsenKeluarUpdate)
absen_keluar_routes.delete("/absen-keluar/delete", AbsenKeluarDelete)


export default absen_keluar_routes