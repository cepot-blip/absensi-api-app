import { response, request } from "express";
import { NoteModels } from "../../../models/Models";


export const NoteUpdate = async(req = request, res= response) => {
    try {
        const {
            id,
            title,
            content
        } = await req.body

        const checkUniqueId = await NoteModels.findUnique({
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

        await NoteModels.update({
            where : {
                id : parseInt(id)
            },
            data : {
                title : title,
                content : content
            }
        })

        res.status(200).json({
            success : true,
            msg : "Successfully update note!"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}