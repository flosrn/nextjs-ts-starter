const swrConfig = {
  // @ts-ignore
  onError: (error) => {
    if (error.status !== 403 && error.status !== 404) {
      // eslint-disable-next-line no-console
      console.error('SWR error :', error);
    }
  },
};

export default swrConfig;
