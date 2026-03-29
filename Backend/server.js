const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/DB");
require("dotenv").config();

const app = express();

/* =======================
   Database Connection
======================= */
connectDB();

/* =======================
   Middlewares
======================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Proper CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173", ""], // frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* =======================
   Routes Imports
======================= */
// User Routes
const menuRouter = require("./src/routes/menuRoute");
const authRouter = require("./src/routes/authRoute");
const cartRouter = require("./src/routes/cartRoute");
const orderRouter = require("./src/routes/orderRoute");
const feedbackRouter = require("./src/routes/feedbackRoute");
const notificationRouter = require("./src/routes/notificationRoute");
const invoiceRouter = require("./src/routes/InvoiceRoute");

// Middleware
const staffAuthMiddleware = require("./src/middleware/staffAuthMiddleware");
const adminAuthMiddleware = require("./src/middleware/adminAuthMiddleware");

// Staff Routes
const orderManageRouter = require("./src/routes/staffRoutes/orderManageRoute");
const menuManageRouter = require("./src/routes/staffRoutes/menuManageRoute");

// Manager Routes
const careerRouter = require("./src/routes/managerRoutes/careerRoute");
const statisticsRouter = require("./src/routes/managerRoutes/staisticsRoute");

/* =======================
   API Routes
======================= */
app.use("/api/v1", menuRouter);
app.use("/api/v1", authRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRouter);
app.use("/api/v1", invoiceRouter);
app.use("/api/v1", feedbackRouter);

// Staff APIs
app.use("/api/v1", orderManageRouter);
app.use("/api/v1", menuManageRouter);

// Manager APIs
app.use("/api/v1", careerRouter);
app.use("/api/v1", statisticsRouter);

/* =======================
   Protected Routes
======================= */
app.get("/staff-content", staffAuthMiddleware, (req, res) => {
  res.send("Welcome to staff content!");
});

app.get("/admin-content", adminAuthMiddleware, (req, res) => {
  res.send("Welcome to admin content!");
});

/* =======================
   Default Route
======================= */
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

/* =======================
   Server Start
======================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
