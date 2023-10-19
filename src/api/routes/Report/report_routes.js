import express from "express"
import { ReportCreate, ReportRead } from "../../controllers/Report"

const report_routes = express.Router()

report_routes.post("/report/create", ReportCreate)
report_routes.post("/report/read", ReportRead)


export default report_routes