// data/JapaneseData.js

import JapaneseWord from '../models/Words/JapaneseWord.js';

export const addJapaneseWord = async (req, res) => {
  const { word, meaning } = req.body;

  try {
    const newJapaneseWord = await JapaneseWord.create({ word, meaning });
    return res.status(201).json(newJapaneseWord);
  } catch (error) {
    console.error("Error adding Japanese word:", error);
    return res.status(500).json({ error: "Failed to add Japanese word" });
  }
};

export const getAllJapaneseWords = async (req, res) => {
  try {
    const allJapaneseWords = await JapaneseWord.find().select(["-__v"]);
    return res.status(200).json(allJapaneseWords);
  } catch (error) {
    console.error("Error getting Japanese words:", error);
    return res.status(500).json({ error: "Failed to fetch Japanese words" });
  }
};
