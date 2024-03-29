import { request, response } from "express"
import { UsersModels } from "../../../models/Models"


export const UsersDelete = async (req = request, res = response) => {
    try {
		const { id } = await req.body

		const checkId = await UsersModels.findUnique({
			where: {
				id: parseInt(id),
			}
		})

		if (!checkId) {
			return res.status(404).json({
				success: false,
				message: 'Id not found!',
			})
		}

		await UsersModels.delete({
			where: {
				id: parseInt(id),
			},
		})

		res.status(200).json({
			success: true,
			msg: "Successfully delete users!",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		})
	}
}