import {useAppSelector} from "../../hooks";
import {Navigate} from "react-router-dom";
import {AppRoute} from "../../const";

export default function PrivateRoute(children: JSX.Element): JSX.Element {
  const isUserAuthorized = useAppSelector((state) => state.isUserAuthorized);
  return (isUserAuthorized ? children : <Navigate to={AppRoute.SignIn}/>);
}
