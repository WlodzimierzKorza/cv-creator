import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ExperienceForm = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Experience Form" subheader="" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField name="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField name="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField name="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField name="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField name="name" label="Name" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="outlined">
          Send
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExperienceForm;
