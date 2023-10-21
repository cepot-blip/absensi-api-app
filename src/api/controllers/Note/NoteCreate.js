import { response, request } from "express";
import { NoteModels } from "../../../models/Models";


export const NoteCreate = async(req=request, res=response) =>{
    try {
        const {title, content} = await req.body
        await NoteModels.create({
            data : {
                title : title,
                content : content
            }
        })

        res.status(200).json({
            success : true,
            msg : "Successfully create note!"
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}