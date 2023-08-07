import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import err from "../utils/errors.json";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ExperienceForm = ({ experience }) => {
  const [jobs, setJobs] = useState(experience || []);
  const today = dayjs();

  const updateJobs = useStore((state) => state.updateJobs);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobTitle: "",
      employer: "",
      startDate: today,
      endDate: today,
      currently: "",
    },
  });

  useEffect(() => {
    updateJobs(jobs);
  }, [updateJobs, jobs]);

  const onSubmit = (data) => {
    setJobs([...jobs, data]);
  };

  return (
    <Card>
      <CardHeader
        title="Header Form"
        subheader="Include your full name and at least one way for employers to contact you."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="jobTitle"
                control={control}
                rules={{ required: true, minLength: 3 }}
                render={({ field }) => {
                  return (
                    <>
                      <TextField
                        name={field.name}
                        label="Job title"
                        onChange={field.onChange}
                        variant="outlined"
                        value={field.value}
                        fullWidth
                        error={errors.jobTitle ? true : false}
                        helperText={
                          errors.jobTitle
                            ? (errors.jobTitle.type === "minLength" &&
                                `${err.minLength} 3`) ||
                              (errors.jobTitle.type === "required" &&
                                err.required)
                            : null
                        }
                      />
                    </>
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="employer"
                rules={{ required: true, minLength: 3 }}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      name={field.name}
                      label="Employer"
                      variant="outlined"
                      value={field.value}
                      onChange={field.onChange}
                      error={errors.employer ? true : false}
                      helperText={
                        errors.employer
                          ? (errors.employer.type === "required" &&
                              err.required) ||
                            (errors.employer.type === "minLength" &&
                              `${err.minLength} 3`)
                          : null
                      }
                      fullWidth
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="startDate"
                render={({ field }) => {
                  return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateField"]}>
                        <DateField
                          label="Start date"
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          disableFuture
                          fullWidth
                          error={errors.startDate ? true : false}
                          helperText={
                            errors.startDate &&
                            errors.startDate.type === "required"
                              ? err.required
                              : null
                          }
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => {
                  return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateField"]}>
                        <DateField
                          disableFuture
                          label="End date"
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.endDateDate ? true : false}
                          helperText={
                            errors.endDateDate &&
                            errors.endDateDate.type === "required"
                              ? err.required
                              : null
                          }
                          fullWidth
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  );
                }}
              />
            </Grid>
            <Grid>
              <List>
                {jobs.length > 0 &&
                  jobs.map((job, index) => {
                    return (
                      <ListItem key={index}>
                        {dayjs(job.startDate).format("MM/DD/YYYY")} -{" "}
                        {dayjs(job.endDate).format("MM/DD/YYYY")} {job.jobTitle}{" "}
                        ({job.employer})
                      </ListItem>
                    );
                  })}
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="outlined" type="submit">
                Save and next job
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                type="button"
                onClick={() => {
                  navigate("/education");
                }}
              >
                Next step
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default ExperienceForm;
