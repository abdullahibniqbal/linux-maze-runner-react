import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Toolbox(props) {
    const classes = useStyles();
    const mediator = props.mediator;

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={addQuestion}>Add Question</Button>
            <Button variant="contained" color="primary">
                Add Answer
            </Button>
            <Button variant="contained" color="secondary" onClick={ () => console.log("Checking...") }>
                Add Comment
            </Button>
        </div>
    );

    function addQuestion() {
        console.log("addQuestion is called...");
        console.log("props", props);
        console.log("mediator", mediator);

        mediator.addQuestion();
    }
}