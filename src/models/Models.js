import { PrismaClient } from "@prisma/client"

export const UsersModels = new PrismaClient().users
export const AbsenMasukModels = new PrismaClient().absensi_masuk
export const AbsenKeluarModels = new PrismaClient().absensi_keluar
export const PengajuanCutiModels = new PrismaClient().pengajuan_cuti
export const ReportModels = new PrismaClient().report
export const ProfileModels = new PrismaClient().profile



