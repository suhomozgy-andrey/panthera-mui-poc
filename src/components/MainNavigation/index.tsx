import * as React from 'react';
import classnames from 'classnames';
import { Link as NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import { LinkProps as NavLinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import MuiLink, { LinkProps } from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Grid2 from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

interface ICustomLinkProps {
    icon: React.ReactNode;
}

const Link = styled((props: LinkProps) => <MuiLink {...props} />)(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

function CustomLink({ icon, children, to, ...props }: NavLinkProps & ICustomLinkProps) {
    const theme = useTheme();
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        // @ts-ignore
        <Link component={NavLink} to={to} {...props} color={match ? 'primary' : 'grey.900'}>
            <span
                style={{
                    margin: `${theme.spacing(0.5)} 0`
                }}
            >
                {icon}
            </span>
            <Typography variant='caption'>{children}</Typography>
        </Link>
    );
}

export const MainNavigation = () => {
    const theme = useTheme();

    return (
        <Stack spacing={2}>
            <CustomLink to='/tests' icon={<AccessibilityIcon fontSize='large' />}>
                Tests
            </CustomLink>
            <CustomLink to='/plans' icon={<AppRegistrationIcon fontSize='large' />}>
                Plans
            </CustomLink>
            <CustomLink to='/runs' icon={<AlarmOnIcon fontSize='large' />}>
                Runs
            </CustomLink>
            <CustomLink to='/issues' icon={<AdbIcon fontSize='large' />}>
                Issues
            </CustomLink>
            <CustomLink to='/tasks' icon={<TaskIcon fontSize='large' />}>
                Tasks
            </CustomLink>
            <CustomLink to='/teams' icon={<PeopleIcon fontSize='large' />}>
                Teams
            </CustomLink>
            <CustomLink to='/reports' icon={<AnalyticsIcon fontSize='large' />}>
                Reports
            </CustomLink>
            <CustomLink to='/settings' icon={<SettingsIcon fontSize='large' />}>
                Settings
            </CustomLink>
        </Stack>
    );
};
