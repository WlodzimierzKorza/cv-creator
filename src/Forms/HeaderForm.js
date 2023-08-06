import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import err from "../utils/errors.json";
import countries from "../utils/countries.json";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

const HeaderForm = ({ data }) => {
  console.log(data);
  const updateState = useStore((state) => state.updateState);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data.firstName || "",
      surname: data.surname || "",
      city: data.city || "",
      country: data.country || "",
      postCode: data.postCode || "",
      phone: data.phone || "",
      email: data.email || "",
    },
  });

  const onSubmit = (data) => {
    updateState(data);
    navigate("/experience");
  };
  return (
    <Card>
      <CardHeader
        title="Header Form"
        subheader="Include your full name and at least one way for employers to contact you."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Grid container spacing={2} padding={2}>
            <Grid item sm={3}>
              <Button fullWidth variant="outlined" type="button">
                Upload image
              </Button>
            </Grid>
            <Grid item sm={9}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true, minLength: 3 }}
                    render={({ field }) => {
                      return (
                        <>
                          <TextField
                            name={field.name}
                            label="First Name"
                            onChange={field.onChange}
                            variant="outlined"
                            value={field.value}
                            fullWidth
                            error={errors.firstName ? true : false}
                            helperText={
                              errors.firstName
                                ? (errors.firstName.type === "minLength" &&
                                    `${err.minLength} 3`) ||
                                  (errors.firstName.type === "required" &&
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
                    name="surname"
                    rules={{ required: true, minLength: 3 }}
                    control={control}
                    render={({ field }) => {
                      return (
                        <TextField
                          name={field.name}
                          label="Surname"
                          variant="outlined"
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.surname ? true : false}
                          helperText={
                            errors.surname
                              ? (errors.surname.type === "required" &&
                                  err.required) ||
                                (errors.surname.type === "minLength" &&
                                  `${err.minLength} 3`)
                              : null
                          }
                          fullWidth
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    control={control}
                    rules={{ required: true, minLength: 5 }}
                    name="city"
                    render={({ field }) => (
                      <TextField
                        name={field.name}
                        onChange={field.onChange}
                        error={errors.city ? true : false}
                        label="City"
                        variant="outlined"
                        value={field.value}
                        helperText={
                          errors.city
                            ? (errors.city.type === "required" &&
                                err.required) ||
                              (errors.city.type === "minLength" &&
                                `${err.minLength} 5`)
                            : null
                        }
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                rules={{ required: true }}
                name="country"
                render={({ field }) => {
                  return (
                    <Autocomplete
                      id="country"
                      options={countries}
                      onChange={(e, value) => {
                        field.onChange(value.label);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="country"
                          label="Country"
                          variant="outlined"
                          fullWidth
                          error={errors.country ? true : false}
                          helperText={errors.country ? "Select country" : null}
                        />
                      )}
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
                  pattern: /^[0-9]{2}-[0-9]{3}$/,
                  maxLength: 6,
                }}
                name="postCode"
                render={({ field }) => {
                  return (
                    <TextField
                      name={field.name}
                      onChange={field.onChange}
                      value={field.value}
                      label="Postcode"
                      variant="outlined"
                      fullWidth
                      error={errors.postCode ? true : false}
                      helperText={
                        errors.postCode
                          ? (errors.postCode.type === "required" &&
                              err.required) ||
                            (errors.postCode.type === "pattern" &&
                              "Wrong postcode format") ||
                            (errors.postCode.type === "maxLength" &&
                              `${err.maxLength} 6`)
                          : null
                      }
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                rules={{ required: true, pattern: /^[0-9]{9}$/ }}
                name="phone"
                render={({ field }) => {
                  return (
                    <TextField
                      name={field.name}
                      label="Phone"
                      variant="outlined"
                      onChange={field.onChange}
                      value={field.value}
                      fullWidth
                      error={errors.phone ? true : false}
                      helperText={
                        errors.phone
                          ? (errors.phone.type === "required" &&
                              err.required) ||
                            (errors.phone.type === "pattern" &&
                              "Wrong phone number format  - 777777777")
                          : null
                      }
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => {
                  return (
                    <TextField
                      name={field.name}
                      onChange={field.onChange}
                      value={field.value}
                      error={errors.email ? true : false}
                      helperText={
                        errors.email
                          ? (errors.email.type === "required" &&
                              err.required) ||
                            (errors.email.type === "pattern" &&
                              "Wrong email addres format")
                          : null
                      }
                      label="Email address"
                      variant="outlined"
                      fullWidth
                    />
                  );
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined" type="submit">
            Next step
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default HeaderForm;
