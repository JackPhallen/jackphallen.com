import {Direction, ScrollAction, ScrollState, SET_DIRECTION, SET_POSITION} from "./types";

const PAGE_HEIGHT = window.innerHeight;

const initState: ScrollState = {
    topPos: 0,
    bottomPos: PAGE_HEIGHT,
    direction: Direction.UP
};


export default function scrollReducer(state: ScrollState = initState, action: ScrollAction) {
    switch(action.type) {
        case SET_POSITION:
            return Object.assign({}, state, {
                topPos: action.topPos,
                bottomPos: action.topPos + PAGE_HEIGHT,
            });
        case SET_DIRECTION:
            return Object.assign({}, state, {
                direction: action.direction
            });
        default:
            return state;
    }
}