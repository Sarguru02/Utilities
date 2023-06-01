const express = require("express");
const session = require("express-session");
const cors = require("cors");
const auth = require("./routers/authRouter");
const { checkAuthenticated } = require("./controllers/authenticator");
const passport = require("passport");
const initializePassport = require("./passport-config");
const flash = require("express-flash");

const app = express();

initializePassport(passport);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(flash());
app.use(express.json());
app.use(
  session({
    secret: "Helloworldsecretisasecretthatanyonecanguess",
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "lax",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", async (req, res) => {
  res.json("okayyyyyy");
});

app.use("/", auth);
app.listen(6969, () => {
  console.log("server running at port 6969");
});
