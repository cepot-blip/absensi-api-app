import { request, response } from "express"
import { AbsenMasukModels } from "../../../models/Models"


export const AbsenMasukDelete = async (req = request, res = response) => {
    try {
		const {id} = await req.body
		const checkUniqueId = await AbsenMasukModels.findUnique({
			where: {
				id: parseInt(id),
			}
		})

		if (!checkUniqueId) {
			return res.status(404).json({
				success: false,
				message: 'Id not found!',
			})
		}

		await AbsenMasukModels.delete({
			where: {
				id: parseInt(id),
			}
		})

		res.status(201).json({
			success: true,
			msg: "Successfully delete absen masuk!",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		})
	}
}