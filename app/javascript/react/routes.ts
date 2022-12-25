const routes = {
  home: "/",
  raffle: (id: number) => {
    return `/raffle/${id}`;
  },
};

export { routes };
