import { Box } from '@mui/material';
import logo from '../assets/logo.svg';
import logo_dark from '../assets/logo_dark.svg';
import { useTheme } from '@mui/material/styles';

export default function Logo({ width }: { width: number }) {
    const theme = useTheme();

    function getStyle(width: number) {
        return {
            width: `${width}px`,
            height: 'auto',
            cursor: 'pointer',
        }
    }

    return (
        <Box sx={{
            // pl: 2,
            display: 'flex',
            alignItems: 'center',
        }}>
            {theme.palette.mode === 'dark'
                ?
                <img
                    src={logo_dark}
                    style={getStyle(width)}
                    alt="logo of sitemark"
                />
                :
                <img
                    src={logo}
                    style={getStyle(width)}
                    alt="logo of sitemark"
                />
            }
        </Box>
    )
}