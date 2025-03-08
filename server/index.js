import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import env from "dotenv";
const app = express();
env.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.post("/api/questions", (req, res) => {
  const { question, name, phone } = req.body;

  // Check if email credentials exist
  if (!process.env.SENDER_EMAIL || !process.env.SENDER_PASSWORD) {
    return res.status(500).json({ error: "Missing email credentials in environment variables" });
  }


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Question Received",
    text: `User: ${name}\n Phone: ${phone} \nQuestion: ${question}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      console.log("info", info);

      return res.status(500).json({ error: error.message });
    }
    res.json({ message: "Question sent via email!" });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
