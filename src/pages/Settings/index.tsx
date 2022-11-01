import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Settings = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Settings',
                navigation: 'Settings nav'
            }}
            contentTitleText='Settings'
        >
            Settings
        </DefaultLayout>
    );
};
