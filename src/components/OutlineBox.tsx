import { alpha, Box } from "@mui/material";

export default function OutlineBox({children}: { children: React.ReactNode }) {
    return (
        <Box
            id="video"
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                mt: { xs: 8, sm: 10 },
                alignSelf: 'center',
                // height: { xs: 200, sm: 700 },
                width: '100%',
                borderRadius: '10px',
                outline: '1px solid',
                outlineColor:
                    theme.palette.mode === 'light'
                        ? alpha('#BFCCD9', 0.5)
                        : alpha('#9CCCFC', 0.1),
                boxShadow:
                    theme.palette.mode === 'light'
                        ? `0 0 12px 4px ${alpha('#9CCCFC', 0.2)}`
                        : `0 0 24px 4px ${alpha('#033363', 0.2)}`,
            })}
        >
            {children}
        </Box>
        )
}