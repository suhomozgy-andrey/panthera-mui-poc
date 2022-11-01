import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Tasks = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Tasks',
                navigation: 'Tasks nav'
            }}
            contentTitleText='Tasks'
        >
            Tasks
        </DefaultLayout>
    );
};
