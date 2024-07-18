import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Logo from '../components/Logo';
import OutlineBox from '../components/OutlineBox';
import Video from '../components/Video';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
        description: 'John is the visionary behind our company. With over 20 years of experience in the industry, he leads our team with passion and dedication.',
        image: 'path/to/john.jpg',
    },
    {
        name: 'Jane Smith',
        position: 'CTO',
        description: 'Jane is our tech guru, ensuring that our solutions are cutting-edge and reliable. She has a knack for solving complex problems.',
        image: 'path/to/jane.jpg',
    },
    // Add more team members as needed
];

export default function About() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Box id="about" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 5,
                px: 3,
            }}>
                <Box sx={{ mb: 5 }}>
                    <Logo width={400} />
                </Box>
                <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
                    INSIGHT is the premier corporate event organized by AIESEC at the University of Colombo. Our mission is to equip undergraduates with a comprehensive understanding of the corporate sector as they prepare to enter the professional world.
                </Typography>
            </Box>

            <Grid container spacing={5} sx={{ mb: 10 }}>
                <Grid item xs={12} md={6}>
                    <OutlineBox>

                        <Video src="/pb.mp4" routePath='/about' />

                    </OutlineBox>

                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                            Personal Branding Workshops
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Our workshops help you build a personal brand that stands out in the competitive corporate world. Learn the skills to present yourself confidently and professionally.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{ mb: 10 }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                            Entrepreneurship Programs
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Our programs provide insights and resources for aspiring entrepreneurs. Learn from successful business leaders and start your own venture.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <OutlineBox>

                        <Video src="/e.mp4" routePath='/about' />

                    </OutlineBox>
                </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 5 }}>
                    Experience Sharing Panels
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 5 }}>
                    Hear from industry professionals about their journeys and experiences. Gain valuable insights that can guide you in your own career path.
                </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 5 }}>
                    Meet Our Team
                </Typography>
                <Grid container spacing={5}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Avatar
                                    src={member.image}
                                    alt={member.name}
                                    sx={{ width: 120, height: 120, mx: 'auto', mb: 3 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                                    {member.position}
                                </Typography>
                                <Typography variant="body2">
                                    {member.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 5 }}>
                    INSIGHT will take place in September, attracting an anticipated 300+ participants. Our goal is to provide delegates with valuable, practical experiences and create a platform for the corporate sector to connect with emerging talent. Join us to gain insights, network with industry professionals, and prepare for a successful career in the corporate world.
                </Typography>
            </Box>
        </Container>
    );
}
