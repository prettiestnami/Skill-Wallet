const fs = require("fs");

const content = "This is my updated Node.js file content!";

fs.writeFile("message.txt", content, (err) => {
  if (err) {
    console.log("Error creating file:", err);
  } else {
    console.log("File created successfully!");
  }
});