import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/authoRoute.js";
import { addWord, getAllWords } from "./data/Data.js";
import { log } from "./middlewares/logger.js";
import { addKoreanWord, getAllKoreanWords } from './data/KoreanData.js'; 
import { addTurkishWord, getAllTurkishWords } from './data/TurkishData.js';
// Middleware
dotenv.config();
const app = express();
const corsOptions = {
  origin: true,
};
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(log);
app.use("/auth", authRoute);
app.get("/", authRoute);
const port =  8000;
const MONGODB_URI = "mongodb+srv://Raisuki:R7@cluster0.cv6zecv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI, {
    
  })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error(`Error Connecting database: ${err.message}`));
  
// Database connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Database is Connected"))
//   .catch((err) => console.log("Database not connected", err));

// Server setup
//const port = process.env.port || 8000;

// Route to add a new word
app.post('/words', async (req, res) => {
  const { word } = req.body;

  try {
    const newWord = await addWord({ word });
    return res.status(201).json({ message: "New word is added", word: newWord });
  } catch (error) {
    console.error("Error creating word:", error);
    return res.status(500).json({ error: "Failed to add word" });
  }
});

// Route to get all words
app.get('/words', async (req, res) => {
  try {
    const words = await getAllWords();
    return res.status(200).json(words);
  } catch (error) {
    console.error("Error getting words:", error);
    return res.status(500).json({ error: "Failed to fetch words" });
  }
});
app.post('/korean-words', async (req, res) => {
    const { word, definition} = req.body;
  
    try {
      const newKoreanWord = await addKoreanWord({ word, definition});
      return res.status(201).json({ message: "New Korean word added", word: newKoreanWord });
    } catch (error) {
      console.error("Error adding Korean word:", error);
      return res.status(500).json({ error: "Failed to add Korean word" });
    }
  });
  
  // Route to get all Korean words
  app.get('/korean-words', async (req, res) => {
    try {
      const koreanWords = await getAllKoreanWords();
      return res.status(200).json(koreanWords);
    } catch (error) {
      console.error("Error getting Korean words:", error);
      return res.status(500).json({ error: "Failed to fetch Korean words" });
    }
  });
  app.post('/turkish-words', async (req, res) => {
    const { word, definition} = req.body;
  
    try {
      const newTurkishWord = await addTurkishWord({ word, definition});
      return res.status(201).json({ message: "New Turkish word added", word: newTurkishWord });
    } catch (error) {
      console.error("Error adding Turkish word:", error);
      return res.status(500).json({ error: "Failed to add Turkish word" });
    }
  });
  
  // Route to get all turkish-words
  app.get('/turkish-words', async (req, res) => {
    try {
      const TurkishWords = await getAllTurkishWords();
      return res.status(200).json(TurkishWords);
    } catch (error) {
      console.error("Error getting Turkish words:", error);
      return res.status(500).json({ error: "Failed to fetch Turkish words" });
    }
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
