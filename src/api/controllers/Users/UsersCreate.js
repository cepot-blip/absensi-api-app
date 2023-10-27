import { request, response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import env from "dotenv";
import { UsersModels } from "../../../models/Models";
env.config();

const salt = bcrypt.genSaltSync(10);

export const UsersCreate = async (req = request, res = response) => {
    try {
        const {
            email,
            password,
            fullname,
            jabatan,
            telepon
        } = req.body; 

        // VALIDASI EMAIL
        const checkUniqueEmail = await UsersModels.findUnique({
            where: {
                email: email
            }
        });

        if (checkUniqueEmail) {
            return res.status(401).json({
                status: false,
                message: "Email already exists"
            });
        }

        const createUsers = await UsersModels.create({
            data: {
                email: email,
                password: bcrypt.hashSync(password, salt),
                fullname: fullname,
                jabatan: jabatan,
                telepon: telepon,
            }
        });

        const token = jwt.sign(
            {
                app_name: process.env.APP_NAME,
                id: createUsers.id,
                email: createUsers.email
            },
            process.env.API_SECRET
        );

        res.status(201).json({
            success: true,
            msg: "Successfully created users!",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
