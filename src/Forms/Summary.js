import { Container, Paper, Grid, Typography } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Summary = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item sm={8}>
          <Paper elevation={3} className="cv-container">
            <Grid container justifyItems="center">
              <Grid item justifyContent="center" sm={12}>
                <Typography variant="h1" textAlign="center" color="primary">
                  Włodzimierz Korza
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Grid
                  container
                  padding={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Grid item sm={4} alignItems="center" display="flex">
                    <LocationOnIcon fontSize="small" color="primary" /> Leszno,
                    64-100 Polska
                  </Grid>
                  <Grid item sm={4} alignItems="center" display="flex">
                    <PhoneAndroidIcon fontSize="small" color="primary" />{" "}
                    724-820-423
                  </Grid>
                  <Grid item sm={4} alignItems="flex-end" display="flex">
                    <MailOutlineIcon fontSize="small" color="primary" />{" "}
                    wkorza@gmail.com
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  sm={3}
                  padding={2}
                  display="flex"
                  justifyContent="flex-end"
                  className="item-title"
                >
                  <Typography
                    variant="h5"
                    color="primary"
                    fontStyle="revert-layer"
                    textAlign="right"
                    sx={{
                      textTransform: "uppercase",
                      wordWrap: "break-word",
                    }}
                  >
                    websites, portfolios, profiles
                  </Typography>
                </Grid>
                <Grid item sm={9} sx={{ padding: "10px" }}>
                  <ul>
                    <li>
                      <a href="https://potrojniepozytywna.firebaseapp.com/">
                        https://potrojniepozytywna.firebaseapp.com/
                      </a>
                    </li>
                    <li>
                      <a href="https://zaginamy.pl/">https://zaginamy.pl/</a>
                    </li>
                    <li>
                      <a href="https://mainmerry-pavlova-b205fd.netlify.app">
                        https://mainmerry-pavlova-b205fd.netlify.app
                      </a>
                    </li>
                    <li>
                      <a href="https://doc.oxari.com">https://doc.oxari.com</a>
                    </li>
                    <li>
                      <a href="https://mastermind-81cf0.web.app">
                        https://mastermind-81cf0.web.app
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  sm={3}
                  padding={2}
                  display="flex"
                  justifyContent="flex-end"
                  className="item-title"
                >
                  <Typography
                    variant="h5"
                    color="primary"
                    fontStyle="revert-layer"
                    textAlign="right"
                    sx={{
                      textTransform: "uppercase",
                      wordWrap: "break-word",
                    }}
                  >
                    Professional summary
                  </Typography>
                </Grid>
                <Grid item sm={9} sx={{ padding: "10px" }}>
                  <p>
                    Hardworking and passionate job seeker with strong
                    organizational skills eager to secure React Developer
                    position. Ready to help team achieve company goals.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                sm={3}
                padding={2}
                display="flex"
                justifyContent="flex-end"
                className="item-title"
              >
                <Typography
                  variant="h5"
                  color="primary"
                  fontStyle="revert-layer"
                  textAlign="right"
                  sx={{
                    textTransform: "uppercase",

                    wordWrap: "break-word",
                  }}
                >
                  skills
                </Typography>
              </Grid>
              <Grid item sm={9} sx={{ padding: "10px" }}>
                <ul>
                  <li>Application Development</li>
                  <li>UI/UX Critical Thinking</li>
                  <li>JavaScript </li>
                  <li>React.js </li>
                  <li>Redux </li>
                  <li>Next.js </li>
                  <li>React Native</li>
                  <li>PHP</li>
                  <li>ASP.NET</li>
                </ul>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                sm={3}
                padding={2}
                display="flex"
                justifyContent="flex-end"
                className="item-title"
              >
                <Typography
                  variant="h5"
                  color="primary"
                  fontStyle="revert-layer"
                  textAlign="right"
                  sx={{
                    textTransform: "uppercase",

                    wordWrap: "break-word",
                  }}
                >
                  work history
                </Typography>
              </Grid>
              <Grid item sm={9} sx={{ padding: "10px" }}>
                <h4>Infonet Projekt</h4>
                <small>2022-2023</small>
                <ul>
                  <li>Application Development</li>
                  <li>UI/UX Critical Thinking</li>
                  <li>JavaScript </li>
                  <li>React.js </li>
                  <li>Redux </li>
                  <li>Next.js </li>
                  <li>React Native</li>
                  <li>PHP</li>
                  <li>ASP.NET</li>
                </ul>
                <h4>Freelancer</h4>
                <small>2010-2020</small>
                <p>
                  In my self-employment period, I worked on many interesting
                  projects, mainly being responsible for frontend development. I
                  primarily worked with the React.js library.
                </p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                sm={3}
                padding={2}
                display="flex"
                justifyContent="flex-end"
                className="item-title"
              >
                <Typography
                  variant="h5"
                  color="primary"
                  fontStyle="revert-layer"
                  textAlign="right"
                  sx={{
                    textTransform: "uppercase",

                    wordWrap: "break-word",
                  }}
                >
                  Languages
                </Typography>
              </Grid>
              <Grid item sm={9} sx={{ padding: "10px" }}>
                <ul>
                  <li>Polish - Native language</li>
                  <li>English - Upper intermediate</li>
                </ul>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Summary;
