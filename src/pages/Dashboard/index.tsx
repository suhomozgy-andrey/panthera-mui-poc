import { Button, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import { purple, blue, red } from '@mui/material/colors';

import { ProjectPicker } from '../../components/ProjectPicker';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const Dashboard = () => {
    const theme = useTheme();

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
            <Button variant='contained' color='primary'>
                Text!
            </Button>
        </DefaultLayout>
    );
};
