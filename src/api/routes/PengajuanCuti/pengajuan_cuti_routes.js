import express from "express"
import { PengajuanCutiCreate, PengajuanCutiDelete, PengajuanCutiRead, PengajuanCutiReadById, PengajuanCutiUpdate } from "../../controllers/PengajuanCuti"

const pengajuan_cuti_routes = express.Router()

pengajuan_cuti_routes.post('/pengajuan-cuti/create', PengajuanCutiCreate)
pengajuan_cuti_routes.post('/pengajuan-cuti/read', PengajuanCutiRead)
pengajuan_cuti_routes.get('/pengajuan-cuti/read-byid/:id', PengajuanCutiReadById)
pengajuan_cuti_routes.put('/pengajuan-cuti/update', PengajuanCutiUpdate)
pengajuan_cuti_routes.delete('/pengajuan-cuti/delete', PengajuanCutiDelete)

export default pengajuan_cuti_routes

