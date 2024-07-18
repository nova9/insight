import { useTheme } from "@mui/material/styles";
import { memo, useEffect, useRef } from "react";

function Video({ src, routePath }: { src: string, routePath: string }) {
    const theme = useTheme();

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const isLoaded = localStorage.getItem(`video_loaded_${routePath}`);
        if (!isLoaded && videoRef.current) {
            videoRef.current.load();
            localStorage.setItem(`video_loaded_${routePath}`, 'true');
        }
    }, [routePath]);

    return (

        <video
            ref={videoRef}
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

export default memo(Video, (prevProps, nextProps) => prevProps.src === nextProps.src);