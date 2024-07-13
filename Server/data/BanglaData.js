// data/BanglaData.js

import BanglaWord from '../models/Words/BanglaWord.js';

export const addBanglaWord = async (req, res) => {
  const { word, meaning } = req.body;

  try {
    const newBanglaWord = await BanglaWord.create({ word, meaning });
    return res.status(201).json(newBanglaWord);
  } catch (error) {
    console.error("Error adding Bangla word:", error);
    return res.status(500).json({ error: "Failed to add Bangla word" });
  }
};

export const getAllBanglaWords = async (req, res) => {
  try {
    const allBanglaWords = await BanglaWord.find().select(["-__v"]);
    return res.status(200).json(allBanglaWords);
  } catch (error) {
    console.error("Error getting Bangla words:", error);
    return res.status(500).json({ error: "Failed to fetch Bangla words" });
  }
};
