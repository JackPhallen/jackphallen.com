export enum Direction {
    UP,
    DOWN,
}

export interface ScrollState {
    topPos: number;
    bottomPos: number;
    direction: Direction,
}

export const SET_POSITION = 'SET_POSITION';
interface SetPositionAction {
    type: typeof SET_POSITION;
    topPos: number
}

export const SET_DIRECTION = 'SET_DIRECTION';
interface SetDirectionAction {
    type: typeof SET_DIRECTION;
    direction: number
}

export type ScrollAction = SetPositionAction | SetDirectionAction;
