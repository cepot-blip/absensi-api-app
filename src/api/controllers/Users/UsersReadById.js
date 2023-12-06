import { request, response } from "express"
import { UsersModels } from "../../../models/Models"

export const UsersReadById = async (req = request, res = response) => {
    try {
        const { id, } = await req.params
		const result = await UsersModels.findUnique({
            where : {
                id : parseInt(id),
            },
			include : {
				AbsenMasuk : {
					select : {
						id : true,
						absen : true,
						updated_at :true
					}
				},
				AbsenKeluar : {
					select : {
						id : true,
						absen : true,
						updated_at : true
					}
				}
			}
        })
		
		res.status(200).json({
			success: true,
			query: result,
		})
        
    } catch (error) {
        res.status(500).json({
            success : false,
            error : error.message
        })
    }
}