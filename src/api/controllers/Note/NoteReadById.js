import { request, response } from "express";
import { NoteModels } from "../../../models/Models";

export const NoteReadById = async(req = request, res = response) => {
    try {
        const { id } = await req.params
        const data = await NoteModels.findUnique({
            where : {
                id : parseInt(id)
            }
        })

        if(!data) {
            return res.status(404).json({
                success : false,
                msg : "Id not found!"
            })
        }

        res.status(200).json({
            success : true,
            query : data
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}