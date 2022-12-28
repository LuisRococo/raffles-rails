const routes = {
  home: "/",
  raffle: (id: number) => {
    return `/raffle/${id}`;
  },
  purchaseInfo: "/purchase-info",
};

export { routes };
