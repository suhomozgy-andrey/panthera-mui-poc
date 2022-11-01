import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { AppContext, TAppContext } from '../../context/AppContext';
import { ProjectPicker } from '../../components/ProjectPicker';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import { UserMenu } from '../../components/UserMenu';
import { ContextualNavigation } from '../../components/ContextualNavigation';
import { MainNavigation } from '../../components/MainNavigation';

interface IDefaultLayoutProps {
    children: React.ReactNode;
    contextualNavigation?: {
        title: React.ReactNode;
        navigation: React.ReactNode;
    };
    contentTitle?: React.ReactNode;
    contentTitleText?: String;
}

export const DefaultLayout = ({
    children,
    contextualNavigation,
    contentTitle,
    contentTitleText
}: IDefaultLayoutProps) => {
    const { title, navigation } = contextualNavigation ?? {};

    const {
        subNavigation: { setSubNavigationOpened, subNavigationOpened }
    } = React.useContext<TAppContext>(AppContext);

    const onHamburgerClick = () => {
        setSubNavigationOpened((prevResult) => !prevResult);
    };

    return (
        <Grid container columnSpacing={0} height='100%' columns={2} m={0}>
            <Grid width={80} container spacing={0} flexDirection='column' height='100%'>
                <Grid textAlign='center' py={2.5}>
                    <Link component={NavLink} to='/'>
                        <svg
                            height='48'
                            width='48'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 48 48'
                            fill='currentColor'
                        >
                            <path d='M27.272 4l.747.004c4.966.055 7.088.669 9.16 1.777a12.115 12.115 0 015.04 5.04l.159.304C43.438 13.208 44 15.478 44 20.728v6.544l-.004.747c-.055 4.966-.669 7.088-1.777 9.16a12.115 12.115 0 01-5.04 5.04l-.304.159C34.792 43.438 32.522 44 27.272 44h-6.544l-.747-.004c-4.966-.055-7.088-.669-9.16-1.777a12.115 12.115 0 01-5.04-5.04l-.159-.304C4.562 34.792 4 32.522 4 27.272v-6.544c0-5.506.619-7.734 1.78-9.907a12.115 12.115 0 015.041-5.04l.304-.159C13.208 4.562 15.478 4 20.728 4zm-3.274 10l-1.905 2.39-4.043-1.95 1 5.466c-2.607 1.332-4.274 3.729-4.274 6.581 0 4.417 6.104 7.207 6.364 7.323l.425.19 2.434-2.036L26.435 34l.425-.19c.26-.116 6.364-2.906 6.364-7.323 0-2.851-1.667-5.248-4.275-6.58l1-5.467-4.044 1.95zm-4.664 7.45l1.43 7.807 2.078 1.74-1.507 1.26c-1.727-.878-5.075-3.126-5.075-5.77 0-2.117 1.184-3.924 3.074-5.038zm9.332 0c1.89 1.114 3.074 2.92 3.074 5.037 0 2.892-3.806 5.106-5.08 5.766l-1.502-1.257 2.079-1.739zm-7.941-.647c1.968-.702 4.582-.702 6.55 0l-1.401 7.66-1.875 1.565-1.873-1.566zm3.273-4.421l1.486 1.86 2.478-1.195-.417 2.277a11.343 11.343 0 00-3.547-.55c-1.27 0-2.464.194-3.545.548l-.415-2.275 2.477 1.196z'></path>
                        </svg>
                    </Link>
                </Grid>
                <Grid flex={1} px={1} overflow='auto' justifyContent='center'>
                    <MainNavigation />
                </Grid>
                <Grid p={2}>
                    <UserMenu />
                </Grid>
            </Grid>
            <Grid container columnSpacing={2} height='100%' columns={2} flexGrow={1} m={0}>
                {contextualNavigation && (
                    <Grid width={240} bgcolor='#f9fafb' height='100%' container spacing={0} flexDirection='column'>
                        <Grid py={2.5} px={2}>
                            <ProjectPicker title={title} />
                        </Grid>
                        <Grid xs={12} flexGrow={1} p={2} pt={0} overflow='auto'>
                            <ContextualNavigation />
                        </Grid>
                    </Grid>
                )}
                <Grid flexGrow={1}>
                    {contentTitle ?? (
                        <div className='tw-px-4 tw-py-[22px] tw-flex tw-items-center'>
                            <div className='tw-mr-[22px] tw-cursor-pointer' onClick={onHamburgerClick}>
                                &times;
                            </div>
                            <span className='tw-block tw-text-2xl'>{contentTitleText}</span>
                        </div>
                    )}

                    <div className='tw-overflow-auto tw-px-4 tw-pt-5 tw-pb-5 tw-h-full'>{children}</div>
                </Grid>
            </Grid>
        </Grid>
    );
};
