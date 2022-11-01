import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Issues = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Issues',
                navigation: 'issues nav'
            }}
            contentTitleText='Issues'
        >
            Issues
        </DefaultLayout>
    );
};
