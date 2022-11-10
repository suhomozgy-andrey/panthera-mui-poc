import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { DefaultLayout } from '../../Lyouts/DefaultLayout';
import TextField from '@mui/material/TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import EnhancedTable from './Table';
import Divider from '@mui/material/Divider/Divider';

export const Tests = () => {
    return (
        <DefaultLayout
            contextualNavigation={{
                title: 'Tests',
                navigation: 'nav'
            }}
            contentTitleText='Tests'
            contentTitleActions={
                <>
                    <Button
                        color='primary'
                        variant='outlined'
                        sx={{
                            marginRight: 2
                        }}
                    >
                        Import tests
                    </Button>
                    <Button color='primary' variant='contained'>
                        New test
                    </Button>
                </>
            }
        >
            <Stack
                sx={{
                    gap: 2
                }}
            >
                <Stack
                    sx={{
                        gap: 2
                    }}
                >
                    <Stack>
                        <TextField
                            sx={{
                                maxWidth: '300px'
                            }}
                            size='small'
                            placeholder='Search tests'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                                endAdornment: <CloseIcon color='inherit' />
                            }}
                        />
                    </Stack>
                    <Stack flexDirection='row'>
                        <Button
                            color='primary'
                            variant='outlined'
                            sx={{
                                marginRight: 2
                            }}
                            startIcon={<AddIcon />}
                        >
                            Add filter
                        </Button>
                        <Button color='inherit' variant='text' disabled>
                            Save segment
                        </Button>
                    </Stack>
                </Stack>
                <Divider />
                <Stack flexGrow={1}>
                    <EnhancedTable />
                </Stack>
            </Stack>
        </DefaultLayout>
    );
};
