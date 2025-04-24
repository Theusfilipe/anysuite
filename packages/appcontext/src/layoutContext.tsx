'use client';

import { createContext, useContext, useState } from 'react';

export type MenuItem = { href: string; text: string; icon?: string };

type LayoutContextType = {
  title: string;
  setTitle: (title: string) => void;
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[]) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <LayoutContext.Provider value={{ title, setTitle, menuItems, setMenuItems }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error('useLayout must be used within LayoutProvider');
  return context;
};