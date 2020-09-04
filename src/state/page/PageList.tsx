import {createRef} from "react";

// export interface Page {
//     name: string;
//     index: number
//     ref: any;
// }

export class Page {
    public name: string;
    public index: number;
    public position: number = -1;

    constructor(name: string, index: number) {
        this.name = name;
        this.index = index;
    }

    setPosition(position: number) {
        this.position = position
    }

    jump() {
        window.scrollTo(0, this.position)
    }

    static validate(page: Page): boolean {
        return page.position !== -1;
    }
}

export default class PageList {

    public static instance: PageList = new PageList();


    public home: Page = new Page("Home", 0);

    public about: Page = new Page("About", 1);

    public projects: Page = new Page("Projects", 2);

    public list: Page[] = [this.home, this.about, this.projects];
    public names: string[] = this.list.map( page => page.name);


    /**
     * Get current page based on top y coordinate of viewport
     * @param position: viewport y coordinate
     */
    getCurrent(position: number): Page {
        for(let i = this.list.length - 1; i >= 0; i--) {
            const page: Page = this.list[i];

            if ( Page.validate(page) && position > page.position ) {
                return page;
            }
        }
        return this.home;
    }


}
