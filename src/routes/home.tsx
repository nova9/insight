import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LogoCollection from '../components/Companies';
import Hero from '../components/Hero';


export default function Home() {

    return (
        <>
            <Hero />
            <Box sx={{ bgcolor: 'background.default' }}>
                <LogoCollection />
                {/* <Features /> */}
                <Divider />
                {/* <Testimonials /> */}
                {/* <Divider /> */}
                {/* <Highlights /> */}
                {/* <Divider /> */}
                {/* <Pricing /> */}
                {/* <Divider /> */}
                {/* <FAQ /> */}
                {/* <Divider /> */}
                {/* <Footer /> */}
            </Box></>
    );
}