import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Assignment(props) {
  let dueDate = new Date(props.date);
  let date = new Date();
  // @ts-ignore
  let days = Math.floor((dueDate - date) / (1000 * 60 * 60 * 24) + 1);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    console.log("click");
    setExpanded(!expanded);
  };

  return (
    <Card className="root dib br3 pa3 ma4 bw2 shadow-5">
      <CardHeader
        avatar={
          <Avatar aria-label="assignment" className={classes.avatar}>
            {"#" + props.no}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="edit"
            onClick={() => {
              props.handleEdit(props.id);
            }}
          >
            <EditIcon />
          </IconButton>
        }
        title={"Subject: " + props.subject}
        subheader={
          "Due date:" +
          props.date.substring(0, 10) +
          "\nDue in: " +
          (days > 0 ? days + " days" : "OVERDUE")
        }
      />
      <CardMedia
        className={classes.media}
        image={"https://source.unsplash.com/random/200x150/?" + props.subject}
        title="Assignment"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!props.isSaved && (
          <IconButton
            aria-label="add to saved lists"
            onClick={() => {
              props.handleSave(props.id);
            }}
          >
            <SaveIcon />
          </IconButton>
        )}
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.handleDelete(props.id);
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show note"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Note:</Typography>
          <Typography paragraph>{props.note}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
