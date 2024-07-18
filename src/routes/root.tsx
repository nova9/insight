import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import AppAppBar from '../components/NavBar';

const getTheme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        ...(mode === 'dark' ? {
            primary: {
                main: '#D84587',
            },
        } :
            {
                primary: {
                    main: '#163899',
                },
            }),
    },
});

export default function Root() {
    const [mode, setMode] = useState<PaletteMode>('light');

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={getTheme(mode)}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Outlet />
        </ThemeProvider>
    );
}