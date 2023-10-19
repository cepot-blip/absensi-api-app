import { response, request } from "express";
import { PengajuanCutiModels } from "../../../models/Models";


export const PengajuanCutiDelete = async(req= request, res= response) => {
    try {
        const { id } = await req.body
        const checkUniqueId = await PengajuanCutiModels.findUnique({
            where : {
                id : parseInt(id)
            }
        })

        if(!checkUniqueId){
            return res.status(404).json({
                success :false,
                msg : 'Id not found!'
            })
        }

        await PengajuanCutiModels.delete({
            where : {
                id : parseInt(id)
            }
        })

        res.status(200).json({
            success : true,
            msg : "Successfully delete pengajuan cuti!"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}