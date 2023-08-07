import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Steps = () => {
  const steps = [
    {
      title: "Header",
      path: "/",
    },
    {
      title: "Experirnce",
      path: "/experience",
    },
    {
      title: "Education",
      path: "/education",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Summary",
      path: "/summary",
    },
  ];

  const location = useLocation();

  return (
    <Box margin={4}>
      <Stepper alternativeLabel>
        {steps.map((step) => {
          return (
            <Step
              key={step.title}
              active={location.pathname === step.path ? true : false}
            >
              <Link to={step.path}>
                <StepLabel>{step.title}</StepLabel>
              </Link>
            </Step>
          );
        })}

        {/* <List>
          <Link to="/">
            <SingleStep primary="Header" count={1} />
          </Link>
          <Link to="/experience">
            <SingleStep primary="Experience" count={2} />
          </Link>
          <Link to="/education">
            <SingleStep primary="Education" count={3} />
          </Link>
          <Link to="/skills">
            <SingleStep primary="Skills" count={4} />
          </Link>
          <Link to="/summary">
            <SingleStep primary="Summary" count={5} />
          </Link>
        </List> */}
      </Stepper>
    </Box>
  );
};

export default Steps;
