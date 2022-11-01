import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#1C6AFF',
            light: '#3C91FF',
            dark: '#003AAC'
        },
        secondary: {
            main: '#E52532',
            light: '#FA2B38',
            dark: '#891424'
        },
        error: {
            main: '#E52532',
            light: '#FA2B38',
            dark: '#891424'
        },
        warning: {
            main: '#EA5D07',
            light: '#FF9408',
            dark: '#B04700'
        },
        success: {
            main: '#058A1B',
            light: '#07A63F',
            dark: '#01510E'
        },
        text: {
            primary: '#242528',
            disabled: '#71757E'
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
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
        fontSize: 14,
        fontWeightBold: 600,
        fontFamily:
            '\'SF Pro Text\', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
    }
});

export default theme;
