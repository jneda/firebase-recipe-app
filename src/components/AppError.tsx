import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function AppError() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return <h2>{error.statusText}</h2>;
  } else {
    return <h2>An error occurred</h2>;
  }
}
