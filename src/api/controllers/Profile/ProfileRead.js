import { response, request } from "express";
import { ProfileModels } from "../../../models/Models";

/**
 * @function ProfileRead ini digunakan untuk menampilkan data profile yang sudah dibuat
 * @param req ini adalah request dari client
 * @param res ini adalah response dari server
 * @function page ini digunakan untuk menampung data page
 * @function limit ini digunakan untuk menampung data limit
 * @function skip ini digunakan untuk menampung data skip
 * @function filter ini digunakan untuk menampung data filter
 * @function result ini digunakan untuk menampung data yang telah dibuat
 * @returns mengembalikan data profile yang sudah dibuat
 * @throws akan mengembalikan error jika terjadi kesalahan pada server
 * 
 * @author cepot-blip
*/


export const ProfileRead = async (req = request, res =  response) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = req.body.filter ?? {};
        const result = await ProfileModels.findMany({
          skip: skip,
          take: limit,
          orderBy: { id: 'desc' },
          where: filter,
        });
    
        const conn = await ProfileModels.count();
    
        const totalPage = Math.ceil(conn / limit);
    
        res.status(200).json({
          success: true,
          current_page: page,
          total_page: totalPage,
          total_data: conn,
          query: result
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
}