import React from 'react';

import { ProjectPicker } from '../../components/ProjectPicker';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Dashboard = () => {
    return (
        <DefaultLayout
            contentTitle={
                <div
                    style={{
                        width: '240px'
                    }}
                >
                    <ProjectPicker title='Testlio Home' />
                </div>
            }
        >
            dashboard
        </DefaultLayout>
    );
};
