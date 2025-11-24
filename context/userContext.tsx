import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  isTrainer: boolean;
  setIsTrainer: (value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isTrainer, setIsTrainer] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isTrainer, setIsTrainer }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
