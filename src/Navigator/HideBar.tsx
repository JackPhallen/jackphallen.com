import React, {FunctionComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {AppState} from "../state/store";
import {connect} from "react-redux";
import {Direction} from "../state/scroll/types";
import Slide from "@material-ui/core/Slide";


const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        top: 0,
        height: 60,
        width: '100%',
        zIndex: 3,
    },
    inFocus: {
        backgroundColor: theme.palette.background.paper
    },
    outFocus: {
        backgroundColor: theme.palette.background.default
    },
}));

interface Props {
    topPos: number;
    direction: Direction;
}

const HideBar: FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    const getDisplayProps = (position: number) => {
        if (position > 0) {
            return({
                className: `${classes.root} ${classes.inFocus}`,
                boxShadow: 1
            });
        } else {
            return({
                className: `${classes.root} ${classes.outFocus}`,
                boxShadow: 0
            });
        }
    };

    return (
        <Slide appear={false} direction="down" in={props.direction === Direction.UP}>
            <Box { ...getDisplayProps(props.topPos) } >
                { props.children }
            </Box>
        </Slide>
    )

};

const mapStateToProps = (state: AppState) => ({
    topPos: state.scroll.topPos,
    direction: state.scroll.direction,
});

export default connect(mapStateToProps)(HideBar);




