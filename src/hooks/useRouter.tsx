const useRouter = () => {
  const path = window.location.pathname;
  const push = (data: string, url: string) => {
    window.history.pushState(data, "", url);
    const popstate = new PopStateEvent("popstate");
    window.dispatchEvent(popstate);
  };
  return { path, push };
};

export default useRouter;
