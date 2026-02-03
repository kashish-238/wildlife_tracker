const fs = require("fs");
const path = require("path");

const loadSightings = async () => {
  try {
    const filePath = path.join(__dirname, "..", "data", "sightings.json");
    const fileData = await fs.promises.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(fileData);
    return parsedData.sightings;
  } catch (error) {
    console.error("Error loading sightings data:", error);
    throw new Error("Could not load sightings data");
  }
};

module.exports = { loadSightings };
