import {PageAction, PageState, SET_PAGE} from "./types";
import PageList from "./PageList";


const initState: PageState = {
    page: PageList.instance.home
};


export default function scrollReducer(state: PageState = initState, action: PageAction) {
    switch(action.type) {
        case SET_PAGE:
            return Object.assign({}, state, {
                page: action.page
            });
        default:
            return state;
    }
}
