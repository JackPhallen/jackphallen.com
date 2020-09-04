import {Direction, ScrollAction, SET_DIRECTION, SET_POSITION} from "./types";
import {action$detectPage} from "../page/actions";

export function action$onScroll(): Function {
    return function(dispatch:Function, getState:Function) {
        const position: number = _getPosition();
        dispatch( _updateDirection(position) );
        dispatch( _setPosition(position) );
    }

}

function _getPosition(): number {
    return window.pageYOffset;
}

export function _setPosition(position: number): ScrollAction {
    return ({
        type: SET_POSITION,
        topPos: position
    })
}


function _updateDirection(position: number): Function {
    return function(dispatch:Function, getState:Function) {
        let direction;
        if (position < 10) {
            direction = Direction.UP;
        } else {
            direction = position > getState().scroll.topPos ? Direction.DOWN : Direction.UP;
            if (direction === Direction.UP) {
                dispatch( action$detectPage() );
            }
        }
        dispatch({
            type: SET_DIRECTION,
            direction: direction
        });
    }
}
