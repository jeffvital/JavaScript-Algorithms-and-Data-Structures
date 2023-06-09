// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    records[id]["tracks"].push(value);
  }
  return records;
}

// 

let result;
// I preferred to create a single variable
// to display in the console at once.

result = updateRecords(recordCollection, 5439, "artist", "ABBA");

result = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

result = updateRecords(recordCollection, 2468, "tracks", "Free");

console.log(result);
