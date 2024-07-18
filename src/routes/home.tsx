import * as React from 'react';
import { Button, Container, PaletteMode, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/NavBar';
import Hero from '../components/Hero';
import LogoCollection from '../components/Companies';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { indigo } from '@mui/material/colors';
import { useState } from 'react';


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