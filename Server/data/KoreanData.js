// data/KoreanData.js

import KoreanWord from '../models/Words/KoreanWord.js';

export const addKoreanWord = async (req, res) => {
  const { word, meaning } = req.body;

  try {
    const newKoreanWord = await KoreanWord.create({ word, meaning });
    return res.status(201).json(newKoreanWord);
  } catch (error) {
    console.error("Error adding Korean word:", error);
    return res.status(500).json({ error: "Failed to add Korean word" });
  }
};

export const getAllKoreanWords = async (req, res) => {
  try {
    const allKoreanWords = await KoreanWord.find().select(["-__v"]);
    return res.status(200).json(allKoreanWords);
  } catch (error) {
    console.error("Error getting Korean words:", error);
    return res.status(500).json({ error: "Failed to fetch Korean words" });
  }
};
