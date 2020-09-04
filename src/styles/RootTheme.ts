import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: blue,
    },
    spacing: 4,
});


export default theme;