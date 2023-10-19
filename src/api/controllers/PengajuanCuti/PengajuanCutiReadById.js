import { response, request } from "express";
import { PengajuanCutiModels } from "../../../models/Models";


export const PengajuanCutiReadById = async (req =  request, res = response) => {
    try {
        const { id } = await req.params
        const result = await PengajuanCutiModels.findUnique({
            where : {
                id : parseInt(id)
            }
        })

        if(!result){
            return res.status(404).json({
                success : false,
                message : 'Data not found!'
            })
        }

        res.status(200).json({
            success : true,
            query : result
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}