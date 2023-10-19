import { request, response } from "express"
import { AbsenKeluarModels } from "../../../models/Models"


export const AbsenKeluarUpdate = async (req = request, res = response) => {
    try {
		const {
			id,
			user_id,
			absen,
			description,
			filename
		} = await req.body
		const checkUniqueId = await AbsenKeluarModels.findUnique({
			where: {
				id: parseInt(id),
			}
		})

		const checkUniqueUserId = await AbsenKeluarModels.findFirst({
			where : {
				id : parseInt(user_id)
			}
		})

		if(!checkUniqueUserId){
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

		await AbsenKeluarModels.update({
			where: {
				id: parseInt(id),
			},
			data: {
                absen : absen,
                description :description,
                filename : filename
			},
		})

		res.status(201).json({
			success: true,
			msg: "Successfully update absen keluar!",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		})
	}
}