import express from "express";
import cors from "cors";
import helmet from "helmet";
import absen_keluar_routes from "./api/routes/AbsenKeluar/absen_keluar_routes";
import absen_masuk_routes from "./api/routes/AbsenMasuk/absen_masuk_routes";
import pengajuan_cuti_routes from "./api/routes/PengajuanCuti/pengajuan_cuti_routes";
import profile_routes from "./api/routes/Profile/profile_routes";
import report_routes from "./api/routes/Report/report_routes";
import note_routes from "./api/routes/Note/note_routes";
import users_routes from "./api/routes/Users/users_routes";

export const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  // WEBSITE YOU WISH TO ALLOW TO CONNECT
  res.setHeader("Access-Control-Allow-Origin", "*");

  // REQUEST METHODS YOU WISH TO ALLOW
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD"
  );

  // REQUEST HEADERS YOU WISH TO ALLOW
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // PASS TO NEXT LAYER OF MIDDLEWARE
  next();
});

app.set("trust proxy", true);

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 201,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

// app.use(limiter);
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api", users_routes);
app.use("/api", absen_keluar_routes);
app.use("/api", absen_masuk_routes);
app.use("/api", pengajuan_cuti_routes);
app.use("/api", profile_routes);
app.use("/api", report_routes);
app.use("/api", note_routes);


// Handle errors
app.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app
