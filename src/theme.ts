import { createTheme, Theme } from '@mui/material/styles';

const getButtonRingShadow = (
    theme: Theme,
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
): string => {
    switch (color) {
        case 'primary':
            return `${theme.palette.primary.main}${theme.palette.action.focusOpacity * 100}`;
        case 'secondary':
            return `${theme.palette.secondary.main}${theme.palette.action.focusOpacity * 100}`;
        case 'success':
            return `${theme.palette.success.main}${theme.palette.action.focusOpacity * 100}`;
        case 'error':
            return `${theme.palette.error.main}${theme.palette.action.focusOpacity * 100}`;
        case 'info':
            return `${theme.palette.info.main}${theme.palette.action.focusOpacity * 100}`;
        case 'info':
            return `${theme.palette.warning.main}${theme.palette.action.focusOpacity * 100}`;
        case 'inherit':
        default:
            return theme.palette.grey[300];
    }
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#1C6AFF',
            light: '#3C91FF',
            dark: '#003AAC',
            100: '#F8FBFF',
            200: '#EBF4FF',
            300: '#E4F0FF',
            400: '#D9E9FF',
            500: '#CFE4FF',
            600: '#3C91FF',
            700: '#1C6AFF',
            800: '#0049DC',
            900: '#003AAC'
        },
        secondary: {
            main: '#9454E5',
            light: '#B972F6',
            dark: '#57308B',
            100: '#F8F1FE',
            200: '#F8F1FE',
            300: '#F4EAFE',
            400: '#F1E3FD',
            500: '#ECD9FD',
            600: '#B972F6',
            700: '#9454E5',
            800: '#713BB5',
            900: '#57308B'
        },
        error: {
            main: '#E52532',
            light: '#FA2B38',
            dark: '#891424',
            100: '#FEF1F0',
            200: '#FEF1F0',
            300: '#FEECEA',
            400: '#FEE3E1',
            500: '#FDDCD9',
            600: '#FA2B38',
            700: '#E52532',
            800: '#AF1A24',
            900: '#891424'
        },
        warning: {
            main: '#EA5D07',
            light: '#FF9408',
            dark: '#B04700',
            100: '#FFF5E4',
            200: '#FFF5E4',
            300: '#FEEFD4',
            400: '#FEE6BC',
            500: '#FDDDA5',
            600: '#FF9408',
            700: '#EA5D07',
            800: '#CE4C00',
            900: '#B04700'
        },
        grey: {
            100: '#F1F1F2',
            200: '#F1F1F2',
            300: '#EDEDEE',
            400: '#E6E6E8',
            500: '#DFE0E1',
            600: '#8D8F95',
            700: '#71757E',
            800: '#535861',
            900: '#3F454F'
        },
        success: {
            main: '#058A1B',
            light: '#07A63F',
            dark: '#01510E',
            100: '#FFF5E4',
            200: '#FFF5E4',
            300: '#FEEFD4',
            400: '#FEE6BC',
            500: '#FDDDA5',
            600: '#FF9408',
            700: '#EA5D07',
            800: '#CE4C00',
            900: '#B04700'
        },
        text: {
            primary: '#242528',
            disabled: '#71757E'
        }
    },
    shape: {
        borderRadius: 4
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    boxShadow: 'none',
                    '&:focus': {
                        boxShadow: `0 0 0 3px ${getButtonRingShadow(theme, ownerState.color)}`
                    }
                })
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true
            }
        }
    },
    typography: {
        button: {
            fontWeight: 600,
            textTransform: 'none'
        },
        htmlFontSize: 16,
        fontSize: 14,
        fontWeightBold: 600,
        fontFamily:
            '\'SF Pro Text\', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
    }
});

export default theme;
