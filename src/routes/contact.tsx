import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'

export default function About() {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        message: Yup.string()
            .required('Message is required'),
    });

    const contactForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission
            console.log(values);
        },
    });

    return (
        <Box
            id="about"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 15,
                px: 3,
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, mt: 5, mb: 3 }}
            >
                Contact Us
            </Typography>
            <Box
                component="form"
                onSubmit={contactForm.handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 700,
                }}
            >
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 3 }}
                    value={contactForm.values.name}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={contactForm.touched.name && Boolean(contactForm.errors.name)}
                    helperText={contactForm.touched.name && contactForm.errors.name}
                />
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 3 }}
                    value={contactForm.values.email}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={contactForm.touched.email && Boolean(contactForm.errors.email)}
                    helperText={contactForm.touched.email && contactForm.errors.email}
                />
                <TextField
                    label="Message"
                    name="message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ mb: 3 }}
                    value={contactForm.values.message}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={contactForm.touched.message && Boolean(contactForm.errors.message)}
                    helperText={contactForm.touched.message && contactForm.errors.message}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mb: 5 }}
                >
                    Send
                </Button>
            </Box>

            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, mt: 5, mb: 3 }}
            >
                Our Contact Information
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{ maxWidth: 700, mb: 1 }}
            >
                Address: 123 Developer Lane, Code City, 45678
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{ maxWidth: 700, mb: 1 }}
            >
                Phone: (123) 456-7890
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{ maxWidth: 700, mb: 1 }}
            >
                Email: contact@company.com
            </Typography>
        </Box>
    );
}
