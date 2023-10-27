import { request, response } from "express";
import { ProfileModels } from "../../../models/Models";

export const ProfileCreate = async (req = request, res =  response) => {
    try {
        const {
            user_id,
            fullname,
            jabatan,
            telepon,
        } = await req.body

        await ProfileModels.create({
            data : {
                user_id : parseInt(user_id),
                fullname : fullname,
                jabatan : jabatan,
                telepon : telepon
            }
        })

        res.status(200).json({
            success : true,
            msg : "Successfully create profile!"
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}