import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {store} from "./redux/store";
import Routes from "./components/route/Route.component";

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={'main-page'}>
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
  )
}

export default App;
