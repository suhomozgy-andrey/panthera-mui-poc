import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Teams = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Teams',
                navigation: 'Teams nav'
            }}
            contentTitleText='Teams'
        >
            Teams
        </DefaultLayout>
    );
};
