import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Countdown from './Countdown';
import OutlineBox from './OutlineBox';
import Video from './Video';


const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

export default function Hero() {

    const registerForm = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Box>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 15 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Register&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            now
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Insight 2024 is the largest corporate day organized by AIESEC in University of Colombo for the eighth consecutive year. It aims to help undergraduates and school leavers step into the world of corporate excellence and unrivaled networking.
                    </Typography>

                    <Stack
                        direction="column"
                        alignSelf="center"
                    >
                        <Stack>
                            {registerForm.errors.email ? <FormHelperText>{registerForm.errors.email}</FormHelperText> : null}
                        </Stack>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            alignSelf="center"
                            spacing={1}
                            useFlexGap
                        >
                            <TextField
                                id="email"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                aria-label="Enter your email address"
                                placeholder="Your email address"
                                inputProps={{
                                    autoComplete: 'on',
                                    'aria-label': 'Enter your email address',
                                }}
                                onChange={registerForm.handleChange}
                                value={registerForm.values.email}
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                        By clicking &quot;Register&quot; you agree to our&nbsp;
                        <Link href="#" color="primary">
                            Terms & Conditions
                        </Link>
                        .
                    </Typography>
                </Stack>
                <Countdown />
                <OutlineBox>


                    <Video src="/hero.mp4" routePath='/' />

                </OutlineBox>

            </Container>
        </Box >
    );
}