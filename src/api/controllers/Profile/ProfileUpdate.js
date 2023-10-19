import { request, response } from "express";
import { ProfileModels } from "../../../models/Models";

export const ProfileUpdate = async (req = request, res = response) =>{
    try {
        const  { 
            id,
            fullname,
            jabatan,
            telepon
         } = await req.body

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

        await ProfileModels.update({
            where : {
                id : parseInt(id)
            },
            data : {
                fullname : fullname,
                jabatan : jabatan,
                telepon : telepon
            }
         })

         res.status(200).json({
            success : true,
            msg : "Successfully update profile!"
         })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}