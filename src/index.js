const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  response.send("<h1>Home page</h1>");
};

const handleProfileRequest = (request, response) => {
  response.send("<h1>Profile page</h1> <h3>My name is Korkor Mensah .</h3>");
};

const handleAboutRequest = (request, response) => {
  response.send("<h1>About page</h1>");
};
const handleWelcomeRequest = (request, response) => {
  response.send("<h1>Welcome page</h1>");
};

server.use("/about", handleAboutRequest);
server.use("/profile", handleProfileRequest);
server.use("/welcome", handleWelcomeRequest);
server.use("/", handleHomeRequest);

server.listen(3000, () => console.log("server running on port 3000"));
