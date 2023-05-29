import {useAppSelector} from "../../hooks";
import {Navigate} from "react-router-dom";
import {AppRoute} from "../../const";

type privateRouteProps = {
  children: JSX.Element
}

export default function PrivateRoute(props: privateRouteProps): JSX.Element {
  const {children} = props;
  const isUserAuthorized = useAppSelector((state) => state.isUserAuthorized);
  return (isUserAuthorized ? children : <Navigate to={AppRoute.SignIn}/>);
}
