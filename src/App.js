import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Route, Routes } from "react-router";
import HeaderForm from "./Forms/HeaderForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";
import SkillsForm from "./Forms/SkillsForm";
import { useStore } from "./store";
import Summary from "./Forms/Summary";
import themes from "./themes";
import Steps from "./components/Steps/Steps";

const App = () => {
  const store = useStore((state) => state);

  return (
    <ThemeProvider theme={themes()}>
      <CssBaseline>
        <Grid container>
          <Grid item xl={12} padding={2}>
            <Container>
              <Paper elevation={4} style={{ marginTop: "40px" }}>
                <Typography
                  variant="h2"
                  color="GrayText"
                  textAlign="center"
                  paddingTop={4}
                >
                  Write your CV!
                </Typography>
                <Steps />
                <Routes>
                  <Route
                    index
                    path="/"
                    element={<HeaderForm data={store.data} />}
                  />
                  <Route
                    path="experience"
                    element={<ExperienceForm experience={store.jobs} />}
                  />
                  <Route
                    path="education"
                    element={<EducationForm educations={store.education} />}
                  />
                  <Route
                    path="skills"
                    element={<SkillsForm skill={store.skills} />}
                  />
                  <Route path="summary" element={<Summary summary={store} />} />
                </Routes>
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
