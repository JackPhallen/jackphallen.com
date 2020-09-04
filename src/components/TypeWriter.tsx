import React, {useEffect, useState} from 'react';
import {Theme, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    text: string;
    size: number;
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline',
    },
    text: {
        margin: 0,
        padding: 0,
        fontSize: (props: Props) => props.size,
    },
    '@keyframes blinker': {
        from: {opacity: 1},
        to: {opacity: 0}
    },
    cursor: {
        animationName: '$blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',
    },
    hidden: {
        opacity: 0
    }
}));

const SPEED = 100;
const FOUR_SECONDS = 3800;
const CURSOR = ' |';


interface State {
    displayStr: string;
    showCursor: boolean;
}

export default function TypeWriter(props: Props) {
    const classes = useStyles(props);

    const [displayStr, setDisplayStr] = useState("");
    const [showCursor, setCursor] = useState(true);

    useEffect( () => {
        _animate(props.text);
        const blinkTime: number = (SPEED * props.text.length) + FOUR_SECONDS;
        setTimeout(
            () => setCursor(false),
            blinkTime
        );
    }, []);


    const _animate = (toDisplay: string) => {
        for (let i = 0; i <= toDisplay.length; i++) {
            const newState = toDisplay.substring(0, i);
            setTimeout(
                () => setDisplayStr(newState),
                SPEED * i);
        }
    };

    const _getCursorClass = (doShow: boolean) => {
        return doShow ? `${classes.text} ${classes.cursor}` : `${classes.text} ${classes.hidden}`
    }

    return(
        <Box className={classes.root}>
            <Typography
                component={'span'}
                className={classes.text}
                color={"textPrimary"}
            >
                {displayStr}
            </Typography>
            <Typography
                component={'span'}
                className={_getCursorClass(showCursor)}
                color={"textSecondary"}
            >
                {CURSOR}
            </Typography>
        </Box>
    )
};


