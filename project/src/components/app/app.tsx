import Main from '../../pages/main/main';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute} from "../../const";
import SignIn from "../../pages/sign-in/sign-in";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<Main/>}/>
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
