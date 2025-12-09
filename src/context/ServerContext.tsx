import React, { createContext, useContext, useState } from 'react';
import { ServerType } from '../types';

interface ServerContextType {
  currentServer: ServerType;
  setServer: (server: ServerType) => void;
}

const ServerContext = createContext<ServerContextType | undefined>(undefined);

export const ServerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentServer, setServer] = useState<ServerType>('survival');

  return (
    <ServerContext.Provider value={{ currentServer, setServer }}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServer = () => {
  const context = useContext(ServerContext);
  if (!context) throw new Error('useServer must be used within a ServerProvider');
  return context;
};
