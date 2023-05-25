import React from "react";
import {Link} from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <>
      <div>404 Not Found</div>
      <Link to='/'>Go to main</Link>
    </>
  );
}
