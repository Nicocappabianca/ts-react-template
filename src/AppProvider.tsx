import { FC, ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppProvider;
