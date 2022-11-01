import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Plans = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Plans',
                navigation: 'plans nav'
            }}
            contentTitleText='Plans'
        >
            Plans
        </DefaultLayout>
    );
};
