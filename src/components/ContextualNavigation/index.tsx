import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled, Theme } from '@mui/material/styles';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import Settings from '@mui/icons-material/Settings';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Link from '@mui/material/Link';
import MuiMenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import IconButton from '@mui/material/IconButton';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
        background: 'none',
        border: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        }
    })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.7rem' }} />} {...props} />
))(({ theme }) => ({
    fontSize: theme.typography.fontSize,
    minHeight: '40px',
    padding: 0,
    paddingRight: theme.spacing(1),
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: 'rgba(168, 194, 255, 0.15)'
    },
    '&:active': {
        backgroundColor: 'rgba(168, 194, 255, 0.2)'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
        marginTop: 0,
        marginBottom: 0,
        fontSize: theme.typography.fontSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    '& .MuiTypography-root': {
        fontSize: theme.typography.fontSize
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0)
}));

const menuListThemeSx = (theme: Theme) => ({
    padding: 0
});

const menuItemTheme1LevelSx = (theme: Theme) => ({
    fontSize: theme.typography.caption,
    borderRadius: '4px',
    minHeight: '40px',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
});

const menuItemThemeSx = (theme: Theme) => ({
    fontSize: theme.typography.caption,
    borderRadius: '4px',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
});

// @ts-ignore
const handleLabelsSettingsClick = (e) => {
    e.stopPropagation();
    console.log('handleLabelsSettingsClick');
};

export const ContextualNavigation = () => {
    return (
        <>
            <Accordion defaultExpanded>
                <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
                    <Typography>Segments</Typography>{' '}
                    <IconButton size='small' onClick={handleLabelsSettingsClick}>
                        <Settings fontSize='small' />
                    </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                    <MenuList sx={menuListThemeSx}>
                        <MuiMenuItem sx={menuItemThemeSx} component={Link} href='/sdfsfsdsdf' selected>
                            Token management
                        </MuiMenuItem>
                        <MuiMenuItem sx={menuItemThemeSx} component={Link} href='/dsf'>
                            Logout
                        </MuiMenuItem>
                    </MenuList>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
                    <Typography>Features</Typography>{' '}
                    <IconButton size='small' onClick={handleLabelsSettingsClick}>
                        <Settings fontSize='small' />
                    </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                    <MenuList sx={menuListThemeSx}>
                        <MuiMenuItem sx={menuItemThemeSx} component={Link} href='/sdfsfsdsdf'>
                            Token management
                        </MuiMenuItem>
                        <MuiMenuItem sx={menuItemThemeSx} component={Link} href='/dsf'>
                            Logout
                        </MuiMenuItem>
                    </MenuList>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
                    <Typography>Labels</Typography>{' '}
                    <IconButton component={Link} href='/sdfsfsdsdf' size='small' onClick={handleLabelsSettingsClick}>
                        <Settings fontSize='small' />
                    </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                    <MenuList sx={menuListThemeSx}>
                        <MuiMenuItem sx={menuItemThemeSx} component={Link} href='/sdfsfsdsdf'>
                            Token management
                        </MuiMenuItem>
                        <MuiMenuItem sx={menuItemThemeSx} component={Link} href='/dsf'>
                            Logout
                        </MuiMenuItem>
                    </MenuList>
                </AccordionDetails>
            </Accordion>
            {/* <MenuList sx={menuListThemeSx}>
                <MuiMenuItem
                    sx={menuItemTheme1LevelSx}
                    component={Link}
                    href='/dsf'
                    aria-controls='panel4d-content'
                    id='panel4d-header'
                    tabIndex={0}
                    selected
                >
                    Archived Tests
                </MuiMenuItem>
            </MenuList> */}
        </>
    );
};
