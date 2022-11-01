import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import * as React from 'react';

const ProjectsButton = styled(ButtonBase)(({ theme }) => ({
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    width: '100%',
    textAlign: 'left',
    height: 48
}));

export const ProjectPicker = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <ProjectsButton
                onClick={handleClick}
                aria-controls={open ? 'project-list' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
            >
                <div>
                    <Typography>Andrei Sukhomozgii</Typography>
                    <Typography variant='caption' noWrap>
                        Testlio Sandbox Playground
                    </Typography>
                </div>
                <Avatar
                    sx={{ width: 32, height: 32 }}
                    src='https://testlio.s3-accelerate.amazonaws.com/user/53609/small-square-1627029502.jpg'
                />
            </ProjectsButton>
            <Menu
                anchorEl={anchorEl}
                id='project-list'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: (theme) => ({
                        boxShadow: theme.shadows[6],
                        mt: 1,
                        width: '240px',
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            bottom: 15,
                            left: -5,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        }
                    })
                }}
            >
                <MenuItem>Melon</MenuItem>
                <MenuItem>Orange</MenuItem>
            </Menu>
        </>
    );
};
