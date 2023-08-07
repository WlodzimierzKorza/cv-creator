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

const SkillsForm = ({ skill }) => {
  const [skills, setEducation] = useState(skill || []);
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
          <Grid container spacing={2}>
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
                              (errors.skill.type === "required" && err.required)
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
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="outlined" type="submit">
                Save and next education
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item>
              <List>
                {skills.length > 0 &&
                  skills.map((e, index) => {
                    return (
                      <ListItem key={index}>
                        {e.skill} - {e.level}
                      </ListItem>
                    );
                  })}
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default SkillsForm;
