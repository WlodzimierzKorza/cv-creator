import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const SingleStep = ({ primary, count }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{count}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={primary}></ListItemText>
    </ListItem>
  );
};

export default SingleStep;
