import { createContext, useContext } from 'react';

export const NavContext = createContext({ navRef: { current: null } });

export const useNav = () => useContext(NavContext);
