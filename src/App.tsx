import React from 'react';
import RootContainer from "./screens/RootContainer";
import {ThemeProvider} from "@material-ui/styles";
import Theme from './styles/RootTheme';
import {Provider} from "react-redux";
import Store from "./state/store";



function App() {
  return (
      <Provider store={Store}>
          <ThemeProvider theme={Theme}>
              <RootContainer/>
          </ThemeProvider>
      </Provider>
  );
}

export default App;

