import { response, request } from "express";
import { ProfileModels } from "../../../models/Models";


export const ProfileDelete = async(req = request, res =  response) => {
    try {
        const { id } = await req.body
        
        const checkUniqueId = await ProfileModels.findUnique({
            where : {
                id : parseInt(id)
            }
        })

        if(!checkUniqueId){
            return res.status(404).json({
                success : false,
                msg : "Id not found!"
            })
        }

        await ProfileModels.delete({
            where : {
                id : parseInt(id)
            }
        })

        res.status(200).json({
            success : true,
            msg : "Successfully delete profile!"
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}