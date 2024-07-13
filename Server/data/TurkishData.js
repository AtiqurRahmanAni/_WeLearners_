// data/TurkishData.js

import TurkishWord from '../models/Words/TurkishWord.js';

export const addTurkishWord = async (req, res) => {
  const { word, meaning } = req.body;

  try {
    const newTurkishWord = await TurkishWord.create({ word, meaning });
    return res.status(201).json(newTurkishWord);
  } catch (error) {
    console.error("Error adding Turkish word:", error);
    return res.status(500).json({ error: "Failed to add Turkish word" });
  }
};

export const getAllTurkishWords = async (req, res) => {
  try {
    const allTurkishWords = await TurkishWord.find().select(["-__v"]);
    return res.status(200).json(allTurkishWords);
  } catch (error) {
    console.error("Error getting Turkish words:", error);
    return res.status(500).json({ error: "Failed to fetch Turkish words" });
  }
};
