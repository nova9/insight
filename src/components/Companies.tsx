import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import axiata from '../assets/axiata.svg';
import redbull from '../assets/redbull.svg';


const whiteLogos = [
    redbull,
    axiata,
];

const darkLogos = [
    ...whiteLogos
];

const logoStyle = {
    height: '50px',
    margin: '0 32px',
    opacity: 1,
};

export default function LogoCollection() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    return (
        <Box id="logoCollection" sx={{ py: 4 }}>
            <Typography
                component="p"
                variant="subtitle2"
                align="center"
                color="text.secondary"
            >
                Trusted by the best companies
            </Typography>
            <Grid container justifyContent="center" sx={{ mt: 5, opacity: 1 }}>
                {logos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo}
                            alt={`Fake company number ${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}