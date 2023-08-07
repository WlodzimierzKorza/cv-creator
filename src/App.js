import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Steps from "./components/Steps/Steps";
import { Route, Routes } from "react-router";
import HeaderForm from "./Forms/HeaderForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";
import SkillsForm from "./Forms/SkillsForm";
import { useStore } from "./store";
import Summary from "./Forms/Summary";
import themes from "./themes";

const App = () => {
  const store = useStore((state) => state);

  return (
    <ThemeProvider theme={themes()}>
      <CssBaseline>
        <Grid container>
          <Grid item xl={12} xs={12}>
            <Header />
          </Grid>
          <Grid item xl={3}>
            {/* <Steps /> */}
          </Grid>
          <Grid item xl={12} padding={2}>
            <Container>
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
            </Container>
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
