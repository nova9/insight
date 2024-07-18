import { useTheme } from "@mui/material/styles";

export default function Video({src}: { src: string }) {
    const theme = useTheme();

    return (
        <video
            autoPlay
            loop
            muted
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: theme.palette.mode === 'dark' ? 'brightness(0.7) contrast(1.2)' : 'none'
            }}
        >
            <source
                src={src}
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    )
}