import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

const Summary = ({ summary }) => {
  const { data, education, jobs, skills } = summary;
  console.log(education);
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <Typography variant="h4">
          {data.firstName} {data.surname}
        </Typography>
        <Typography variant="subtitle1">
          {data.postCode} {data.city}, {data.country}
          <br />
        </Typography>
        <Typography variant="subtitle2">
          phone: {data.phone} email:{data.email}
        </Typography>
        <hr />
        <Typography variant="h4">Education</Typography>
        <List>
          {education.length > 0 &&
            education.map((e) => {
              return (
                <ListItem>
                  {e.year} - {e.institution}({e.fieldOfStudy} )/{" "}
                  {e.qualification}
                </ListItem>
              );
            })}
        </List>
        <hr />
        <Typography variant="h4">Experience</Typography>
        <List>
          {jobs.length > 0 &&
            jobs.map((e) => {
              return (
                <ListItem>
                  {dayjs(e.startDate).format("MM/YY")}-
                  {dayjs(e.endDate).format("MM/YY")} {e.jobTitle} ({e.employer})
                </ListItem>
              );
            })}
        </List>
        <hr />
        <Typography variant="h4">Skills</Typography>
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
    </Card>
  );
};

export default Summary;
