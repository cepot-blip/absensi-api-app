import { request, response } from "express"
import { AbsenKeluarModels } from "../../../models/Models"


export const AbsenKeluarDelete = async (req = request, res = response) => {
    try {
		const {id} = await req.body
		const checkUniqueId = await AbsenKeluarModels.findUnique({
			where: {
				id: parseInt(id)
			}
		})

		if (!checkUniqueId) {
			return res.status(404).json({
				success: false,
				message: 'Id not found!',
			})
		}

		await AbsenKeluarModels.delete({
			where: {
				id: parseInt(id),
			}
		})

		res.status(201).json({
			success: true,
			msg: "Successfully delete absen keluar!",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		})
	}
}