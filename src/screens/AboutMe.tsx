import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Tabs, Typography} from "@material-ui/core";
import TypeWriter from "../components/TypeWriter";
import {ABOUT_TEXT} from "../data/text";


const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        margin: 'auto',
        alignContent: 'flex-start',
        paddingBottom: 60,
        paddingTop: 60
    },
    text: {
        fontSize: 20
    }
}));


interface Props {
}

function AboutMe(props: Props) {
    const classes = useStyles();


    return(
        <Box className={classes.root}>
            <h2>About Me</h2>
            <Typography
                component={'span'}
                className={classes.text}
            >
                { ABOUT_TEXT }
            </Typography>
        </Box>
    )

}


export default AboutMe;