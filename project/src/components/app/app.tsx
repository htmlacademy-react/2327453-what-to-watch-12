import Main from '../../pages/main/main';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute} from "../../const";
import SignIn from "../../pages/sign-in/sign-in";
import MyList from "../../pages/my-list/my-list";
import MoviePage from "../../pages/movie-page/movie-page";
import AddReview from "../../pages/add-review/add-review";
import PrivateRoute from "../private-route/private-route";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<Main />}/>
          <Route path={AppRoute.SignIn} element={<SignIn />}/>
          <Route path={AppRoute.MyList} element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }/>
          <Route path={AppRoute.Film } element={<MoviePage />}/>
          <Route path={AppRoute.AddReview } element={<AddReview />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
