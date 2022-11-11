const express = require("express");
const cors = require('cors');
const MeetingSchedulingAPI = require("./src/routes/meeting-route")
const EventSchedulingAPI = require("./src/routes/event-route")
const ProjectAPI = require("./src/routes/project-route")
const ProfessionalAPI = require("./src/routes/professional-route")
const ClubAPI = require("./src/routes/club-route")
const DiscussionAPI = require("./src/routes/discussion-route")
const RequestMeetingAPI = require("./src/routes/request-route")
const UserAPI = require("./src/routes/user-route")

const bodyParser = require("body-parser");
const connectDB = require("./src/config/config");
const app = express();

const http = require('http');

const hostname = '127.0.0.1';

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.use(cors());
app.use(bodyParser.json())

connectDB();

app.use("/meetings", MeetingSchedulingAPI)
app.use("/events", EventSchedulingAPI)
app.use("/projects", ProjectAPI)
app.use("/professionals", ProfessionalAPI)
app.use("/clubs", ClubAPI)
app.use("/discussions", DiscussionAPI)
app.use("/requests", RequestMeetingAPI)
app.use("/users", UserAPI)

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });