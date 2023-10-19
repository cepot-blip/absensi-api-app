import { response, request } from "express";
import { ReportModels } from "../../../models/Models";

export const ReportCreate =  async(req = request, res = response) =>{
    try {
        const data = await req.body
        await ReportModels.create({
            data : {
                description : data.description
            }
        })

        res.status(200).json({
            success : true,
            msg : "Successfully create profile"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}