import * as React from 'react';
import { connect } from "react-redux";
import {Box, Theme} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {WithStyles} from "@material-ui/styles";
import createStyles from "@material-ui/styles/createStyles";
import {_setPosition, action$onScroll} from "../state/scroll/actions";
import {bindActionCreators} from "redux";
import {ThunkDispatch} from "redux-thunk";
import Header from "../Navigator/Header";
import TypeWriter2 from "../components/TypeWriter";
import AboutMe from "./AboutMe";
import Home from "./Home";
import {createRef, useRef} from "react";
import {AppState} from "../state/store";
import {Direction} from "../state/scroll/types";
import PageList from "../state/page/PageList";
import PageContainer from "./PageContainer";
import TypeWriter from "../components/TypeWriter";
import Projects from "./Projects";


const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        paddingTop: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
    },
});


interface Props extends WithStyles<typeof styles> {
    topPos: number;
    direction: Direction;
    actions$onScroll: typeof action$onScroll;
    _setPosition: typeof _setPosition;
}


interface State {

}


class RootContainer extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this._onScroll = this._onScroll.bind(this);
    }


    componentDidMount(): void {
        window.onscroll = () => this._onScroll();
    }

    _onScroll() {
        this.props.actions$onScroll();
    }
    //TODO have "HELLO" be centered but to the right. maybe create a margin for each section

    //FIGURE OUT IF SCROLL LAG IS UNIVERSAL

    // MAYBE USE FRAGMENTS? BUT THEN I HAVE TO HAVE TABS BE LINKS ?
    //THAT WOULDN'T BE THAT HARD THO

    //TODO
    //DON't UPDATE HEADER PAGE UNTIL TOP BELOW PAGE POSITION

    //TODO move aall scrolling logic into header to speed things up


    render() {
        const {classes} = this.props;
        return(
            <Box className={classes.root}>
                <Header/>
                <PageContainer page={PageList.instance.home}>
                    <Home/>
                </PageContainer>
                <PageContainer page={PageList.instance.about}>
                    <AboutMe/>
                </PageContainer>
                <PageContainer page={PageList.instance.projects}>
                    <Projects/>
                </PageContainer>
            </Box>
        )
    }

};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return bindActionCreators({
        actions$onScroll: action$onScroll,
        _setPosition
    }, dispatch);
};

const mapStateToProps = (state: AppState) => ({
    topPos: state.scroll.topPos,
    direction: state.scroll.direction,
});

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(RootContainer) );