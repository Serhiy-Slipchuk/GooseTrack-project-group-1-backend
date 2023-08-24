const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database coonection successful".green);
    app.listen(PORT, () => {
      console.log(
        `Server running. Use API on port: ${PORT.bold.brightMagenta}`.green
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });