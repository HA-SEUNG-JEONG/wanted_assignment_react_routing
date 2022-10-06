import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface Router {
  children: ReactNode;
}

export const RouteContext = createContext({
  path: window.location.pathname,
  setpath: Function as Dispatch<SetStateAction<string>>,
});

const Router = ({ children }: Router) => {
  const [path, setpath] = useState(window.location.pathname);
  return (
    <RouteContext.Provider value={{ path, setpath }}>
      <section>{children}</section>
    </RouteContext.Provider>
  );
};

export default Router;
