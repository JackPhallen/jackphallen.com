import {PageAction, SET_PAGE} from "./types";
import PageList, {Page} from "./PageList";

/*
    ACTION PAGES CANNOT UPDATE PAGE POSITION
    WILL CAUSE TOO DEEP RECURSION
 */

export function action$setPage(page: Page): PageAction {
    return({
        type: SET_PAGE,
        page: page
    });
}

export function action$detectPage() {
    return function (dispatch: Function, getState: Function) {
        const position: number = getState().scroll.topPos;
        const page: Page = PageList.instance.getCurrent(position);
        if (page !== getState().page.page) {
            dispatch( action$setPage(page) );
        }
    }
}