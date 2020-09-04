import * as React from "react";
import {Page} from "../state/page/PageList";
import {createRef} from "react";


interface Props {
    page: Page
}

export default class PageContainer extends React.Component<Props> {

    private ref: any;

    constructor(props: Props) {
        super(props);
        this.ref = createRef();
        console.log(this.ref);
    }

    componentDidMount(): void {

        this.props.page.setPosition( this.ref.current.offsetTop )
    }

    render() {
        return(
            <div ref={this.ref} style={{ width: '100%'}}>
                { this.props.children }
            </div>
        )
    }

}