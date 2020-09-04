import {Page} from "./PageList";




export interface PageState {
    page: Page;
}

export const SET_PAGE = 'SET_PAGE';
interface SetPage {
    type: typeof SET_PAGE;
    page: Page
}

export type PageAction = SetPage;