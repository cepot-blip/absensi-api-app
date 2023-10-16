import { request, response } from "express"
import { AbsenMasukModels } from "../../../models/Models"


export const AbsenMasukCreate = async (req = request, res = response) => {
    try {
        const  {absen, description, filename, user_id} = req.body
        await AbsenMasukModels.create({
            data : {
                user_id : parseInt(user_id),
                absen : absen,
                description : description,
                filename : filename
            }
        })

       return res.status(200).json({
            success: true,
            msg : "Successfuly create absen masuk!"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}