import { Grid } from "@mui/material";
import Header from "./components/Header";
import Steps from "./components/Steps/Steps";
import { Route, Routes } from "react-router";
import HeaderForm from "./Forms/HeaderForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";
import SkillsForm from "./Forms/SkillsForm";
import { useStore } from "./store";
import Summary from "./Forms/Summary";

const App = () => {
  const store = useStore((state) => state);
  // console.log(store);
  return (
    <Grid container>
      <Grid item xl={12} xs={12}>
        <Header />
      </Grid>
      <Grid item xl={2}>
        <Steps />
      </Grid>
      <Grid item xl={6} padding={2}>
        <Routes>
          <Route index path="/" element={<HeaderForm data={store.data} />} />
          <Route
            path="experience"
            element={<ExperienceForm experience={store.experience} />}
          />
          <Route
            path="education"
            element={<EducationForm education={store.education} />}
          />
          <Route path="skills" element={<SkillsForm skills={store.skills} />} />
          <Route path="summary" element={<Summary summary={store} />} />
        </Routes>
      </Grid>
      <Grid item xl={4}>
        Prevew
      </Grid>
    </Grid>
  );
};

export default App;
