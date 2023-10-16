import { request, response } from "express"
import { AbsenMasukModels } from "../../../models/Models"


export const AbsenMasukUpdate = async (req = request, res = response) => {
    try {
		const data = await req.body
		const checkUniqueId = await AbsenMasukModels.findUnique({
			where: {
				id: data.id,
			}
		})

        const checkUniqueUserId = await AbsenMasukModels.findFirst({
            where : {
                id : data.user_id
            }
        })

        if(checkUniqueUserId){
            return res.status(404).json({
                success : false,
                message : "User Id not found!"
            })
        }

		if (!checkUniqueId) {
			return res.status(404).json({
				success: false,
				message: 'Id not found!',
			})
		}

		await AbsenMasukModels.update({
			where: {
				id: parseInt(data.id),
			},
			data: {
                absen : data.absen,
                description :data.description,
                filename : data.filename
			},
		})

		res.status(201).json({
			success: true,
			msg: "Successfully update absen masuk!",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		})
	}
}