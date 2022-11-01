import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Reports = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Reports',
                navigation: 'Reports nav'
            }}
            contentTitleText='Reports'
        >
            Reports
        </DefaultLayout>
    );
};
