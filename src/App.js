import { Grid } from "@mui/material";
import Header from "./components/Header";
import Steps from "./components/Steps/Steps";
import { Route, Routes } from "react-router";
import HeaderForm from "./Forms/HeaderForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";

const App = () => {
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
          <Route index path="/" element={<HeaderForm />} />
          <Route path="experience" element={<ExperienceForm />} />
          <Route path="education" element={<EducationForm />} />
        </Routes>
      </Grid>
      <Grid item xl={4}>
        Prevew
      </Grid>
    </Grid>
  );
};

export default App;
