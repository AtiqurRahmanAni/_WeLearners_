// data/Data.js

import Word from '../models/Words/Word.js';

export const addWord = async (req, res) => {
  const { word, meaning } = req.body;

  try {
    const newWord = await Word.create({ word, meaning });
    return res.status(201).json(newWord);
  } catch (error) {
    console.error("Error adding  word:", error);
    return res.status(500).json({ error: "Failed to add  word" });
  }
};

export const getAllWords = async (req, res) => {
  try {
    const allWords = await Word.find().select(["-__v"]);
    return res.status(200).json(allWords);
  } catch (error) {
    console.error("Error getting  words:", error);
    return res.status(500).json({ error: "Failed to fetch  words" });
  }
};
