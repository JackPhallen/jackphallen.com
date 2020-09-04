import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Tabs, Typography} from "@material-ui/core";
import TypeWriter from "../components/TypeWriter";
import {ABOUT_TEXT, HOME_TEXT} from "../data/text";
import {PROJECT_LIST, ProjectData} from "../data/projects"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


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
    cont: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: "wrap"
    },
    card: {
        width: 300,
        maxHeight: 300,
        margin: 20
    },
    text: {
        fontSize: 20
    }
}));


interface Props {
}

function Projects(props: Props) {
    const classes = useStyles();


    return(
        <Box className={classes.root}>
            <h2>Projects</h2>
            <Typography
                component={'span'}
                className={classes.text}
            >
                Here are some personal projects that I have written in my free time. I am usually busy with school and work so
                most of them are fairly old (and embarrassing). I am, however, very fond of the Tweet Commune :)
            </Typography>
                <Box className={classes.cont}>
                    {PROJECT_LIST.map( (project: ProjectData) => {
                        return(
                            <Card className={classes.card}>
                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {project.desc}
                                    </Typography>

                                </CardContent>
                                <CardActions>

                                    <Button size="small" color="primary" href={project.link}>
                                        View
                                    </Button>
                                    <Button size="small" color="primary" href={project.git}>
                                        GitHub
                                    </Button>

                                </CardActions>
                            </Card>
                        )
                    })}
                </Box>
        </Box>
    )

}


export default Projects;