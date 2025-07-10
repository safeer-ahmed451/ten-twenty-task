import NextTopLoader from "nextjs-toploader";

export const TopProgressBar = () => {
  return (
    <NextTopLoader
      color="#000000"
      height={4}
      showSpinner={false}
      easing="ease"
    />
  );
};
