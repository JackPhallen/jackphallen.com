import React from 'react';
import {action$setPage} from "../state/page/actions";
import HideBar from "./HideBar";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Tabs, Typography} from "@material-ui/core";
import {bindActionCreators} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import Tab from "@material-ui/core/Tab";
import {AppState} from "../state/store";
import PageList, {Page} from "../state/page/PageList";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    left: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: theme.spacing(10)
    },
    right: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: theme.spacing(10)
    },
    name: {
        margin: 0,
        padding: 0,
        fontSize: 30,
    },
}));


interface Props {
    page: Page
    action$setPage: typeof action$setPage
}

function Header(props: Props) {
    const classes = useStyles();
    const pageNames = PageList.instance.names;

    const onChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        const page: Page = PageList.instance.list[newValue];
        page.jump();
        props.action$setPage(page);
    };

    //TODO change cursor when hover name (behave like tab)
    return(
        <HideBar>
            <Box className={classes.root}>
                <Box className={classes.left} onClick={(event) => onChange(event, 0)} >
                    <Typography
                        component={'span'}
                        className={classes.name}
                        color={"textPrimary"}
                    >
                        Jack Phallen
                    </Typography>
                </Box>
                <Box className={classes.right}>
                    <Tabs
                        value={props.page.index}
                        onChange={onChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        { pageNames.map( (name, index) => <Tab key={index} label={name} disableRipple={true} />) }
                    </Tabs>
                </Box>
            </Box>
        </HideBar>
    )

}

const mapStateToProps = (state: AppState) => ({
    page: state.page.page,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return bindActionCreators({
        action$setPage: action$setPage,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);