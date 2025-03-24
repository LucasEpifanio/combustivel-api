import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApiContextProps {
  combustiveis: any[];
  setCombustiveis: React.Dispatch<React.SetStateAction<any[]>>;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [combustiveis, setCombustiveis] = useState<any[]>([]);

  return (
    <ApiContext.Provider value={{ combustiveis, setCombustiveis }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi deve ser usado dentro de ApiProvider');
  }
  return context;
};
