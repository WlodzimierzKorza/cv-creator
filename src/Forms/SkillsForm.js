import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormHelperText,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import err from "../utils/errors.json";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SkillsForm = () => {
  const stateSkills = useStore((state) => state.skills);
  const [skills, setEducation] = useState(stateSkills || []);
  const updateSkills = useStore((state) => state.updateSkills);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skill: "",
      level: "",
    },
  });

  console.log(errors);

  useEffect(() => {
    updateSkills(skills);
  }, [skills, updateSkills]);

  const onSubmit = (data) => {
    setEducation([...skills, data]);
  };
  return (
    <Card>
      <CardHeader title="Skils Form" subheader="Add your skills" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Grid container spacing={2} padding={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="skill"
                  control={control}
                  rules={{ required: true, minLength: 3 }}
                  render={({ field }) => {
                    return (
                      <>
                        <TextField
                          name={field.name}
                          label="Skill"
                          onChange={field.onChange}
                          variant="outlined"
                          value={field.value}
                          fullWidth
                          error={errors.skill ? true : false}
                          helperText={
                            errors.skill
                              ? (errors.skill.type === "minLength" &&
                                  `${err.minLength} 3`) ||
                                (errors.skill.type === "required" &&
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
                  name="level"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          placeholder="Level"
                          label="Level"
                          name={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.level ? true : false}
                          fullWidth
                        >
                          <MenuItem value="Junior">Junior</MenuItem>
                          <MenuItem value="Regular">Regular</MenuItem>
                          <MenuItem value="Senior">Senior</MenuItem>
                          <MenuItem value="Master">Master</MenuItem>
                        </Select>
                        {errors.level && (
                          <FormHelperText error>
                            {errors.level.type === "required"
                              ? "Select your skill level"
                              : null}
                          </FormHelperText>
                        )}
                      </>
                    );
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <List>
            {skills.length > 0 &&
              skills.map((e) => {
                return (
                  <ListItem>
                    {e.skill} - {e.level}
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
              navigate("/summary");
            }}
          >
            Next step
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default SkillsForm;
