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

import { Controller, useForm } from "react-hook-form";
import err from "../utils/errors.json";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EducationForm = () => {
  const educationState = useStore((state) => state.education);
  const [education, setEducation] = useState(educationState || []);
  const updateEducation = useStore((state) => state.updateEducation);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      institution: "",
      city: "",
      qualification: "",
      fieldOfStudy: "",
      year: "",
    },
  });

  useEffect(() => {
    updateEducation(education);
  }, [education, updateEducation]);

  const onSubmit = (data) => {
    setEducation([...education, data]);
  };
  return (
    <Card>
      <CardHeader
        title="Education Form"
        subheader="List all qualifications or degrees you’ve earned or in progress"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Grid container spacing={2} padding={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="institution"
                  control={control}
                  rules={{ required: true, minLength: 3 }}
                  render={({ field }) => {
                    return (
                      <>
                        <TextField
                          name={field.name}
                          label="Institution"
                          onChange={field.onChange}
                          variant="outlined"
                          value={field.value}
                          fullWidth
                          error={errors.institution ? true : false}
                          helperText={
                            errors.institution
                              ? (errors.institution.type === "minLength" &&
                                  `${err.minLength} 3`) ||
                                (errors.institution.type === "required" &&
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
                  name="fieldOfStudy"
                  rules={{ required: true, minLength: 3 }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        name={field.name}
                        label="Field of study"
                        variant="outlined"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.fieldOfStudy ? true : false}
                        helperText={
                          errors.fieldOfStudy
                            ? (errors.fieldOfStudy.type === "required" &&
                                err.required) ||
                              (errors.fieldOfStudy.type === "minLength" &&
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
                  name="qualification"
                  rules={{ required: true, minLength: 3 }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        name={field.name}
                        label="Qualification"
                        variant="outlined"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.qualification ? true : false}
                        helperText={
                          errors.qualification
                            ? (errors.qualification.type === "required" &&
                                err.required) ||
                              (errors.qualification.type === "minLength" &&
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
                  name="year"
                  rules={{ required: true, maxLength: 4 }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <TextField
                        name={field.name}
                        label="Year"
                        variant="outlined"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.year ? true : false}
                        helperText={
                          errors.year
                            ? (errors.year.type === "required" &&
                                err.required) ||
                              (errors.year.type === "minLength" &&
                                `${err.maxLength} 4`)
                            : null
                        }
                        fullWidth
                      />
                    );
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <List>
            {education.length > 0 &&
              education.map((e) => {
                return (
                  <ListItem>
                    {e.year} - {e.institution} /{e.fieldOfStudy} (
                    {e.qualification})
                  </ListItem>
                );
              })}
          </List>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined" type="submit">
            Save and next education
          </Button>
          <Button
            fullWidth
            variant="outlined"
            type="button"
            onClick={() => {
              navigate("/skills");
            }}
          >
            Next step
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default EducationForm;
