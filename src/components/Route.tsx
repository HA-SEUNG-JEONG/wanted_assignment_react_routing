import { useContext } from "react";
import { RouteContext } from "./Router";

interface Route {
  path: string;
  component: JSX.Element;
}

const Route = ({ path, component }: Route) => {
  const { path: currentPath, setpath } = useContext(RouteContext);

  window.onpopstate = () => {
    setpath(window.location.pathname);
  };

  if (currentPath !== path) return <></>;
  return component;
};

export default Route;
