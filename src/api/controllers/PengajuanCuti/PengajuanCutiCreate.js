import { response, request } from "express";
import { PengajuanCutiModels } from "../../../models/Models";


export const PengajuanCutiCreate = async (req =  request, res = response) =>{
    try {
        const {
            user_id,
            jenis_cuti,
            jumlah_cuti,
            tanggal_request,
            status_pengajuan,
            description,
            filename
        } = req.body
        await PengajuanCutiModels.create({
            data : {
                user_id : parseInt(user_id),
                jenis_cuti : jenis_cuti,
                jumlah_cuti : jumlah_cuti,
                tanggal_request : tanggal_request,
                status_pengajuan : status_pengajuan,
                description : description,
                filename : filename
            }
        }) 

         return res.status(200).json({
            success : true,
            msg : "Successfully create pengajuan cuti!"
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}