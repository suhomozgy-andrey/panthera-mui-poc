import * as React from 'react';

type TSubNavigation = {
    subNavigationOpened?: boolean;
    setSubNavigationOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TAppContext = {
    subNavigation: TSubNavigation;
};

const subNavigation = {
    subNavigationOpened: true,
    setSubNavigationOpened: () => {}
};

export const AppContext = React.createContext<TAppContext>({
    subNavigation
});
