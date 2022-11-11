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


const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});