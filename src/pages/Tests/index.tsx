import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Tests = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Tests',
                navigation: 'nav'
            }}
            contentTitleText='Tests'
        >
            Tests
        </DefaultLayout>
    );
};
