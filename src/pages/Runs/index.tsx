import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Runs = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Runs',
                navigation: 'runs nav'
            }}
            contentTitleText='Runs'
        >
            content
        </DefaultLayout>
    );
};
