import { response, request } from "express";
import { PengajuanCutiModels } from "../../../models/Models";



export const PengajuanCutiUpdate = async (req = request, res = response) => {
    try {
        const {
            id,
            jenis_cuti,
            jumlah_cuti,
            tanggal_request,
            status_pengajuan,
            description,
            filename
        } = await req.body

        const checkUniqueId = await PengajuanCutiModels.findUnique({
            where : {
                id : parseInt(id)
            },
        })

        if(!checkUniqueId){
            return res.status(404).json({
                success : false,
                msg : 'Id not found!'
            })
        }

        await PengajuanCutiModels.update({
            where : {
                id : parseInt(id)
            },
            data : {
                jenis_cuti : jenis_cuti,
                jumlah_cuti : jumlah_cuti,
                tanggal_request : tanggal_request,
                status_pengajuan : status_pengajuan,
                description : description,
                filename : filename
            }
        })

        res.status(200).json({
            success : true,
            msg : 'Successfully update pengajuan cuti!'
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}