import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#101010",
                p: 1,
                "@media only screen and (min-width: 1000px)": {
                    position: "fixed"
                },
                bottom: 0,
                width: "100%",
                zIndex: 99
            }}
        >
            <Container sx={{ width: "100%" }}>
                <Grid container spacing={5} sx={{ width: "100%", ml: "-20px" }}>
                    <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Typography variant="h6" color="#FFFFFF" gutterBottom sx={{ fontSize: "14px" }}>
                            {t("aboutUs")}
                        </Typography>
                        <Typography variant="body2" textAlign={"center"} color="#656565" sx={{ fontSize: "12px" }}>
                            {t("footerDescription")}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Typography variant="h6" color="#FFFFFF" gutterBottom sx={{ fontSize: "14px" }}>
                            {t("contactUs")}
                        </Typography>
                        <Typography variant="body2" color="#656565" sx={{ fontSize: "12px" }}>
                            Romania, Brasov, Str. Vasile Carlova, Nr. 16
                        </Typography>
                        <Typography variant="body2" color="#656565" sx={{ fontSize: "12px" }}>
                            Email: office@dacona.ro
                        </Typography>
                        <Typography variant="body2" color="#656565" sx={{ fontSize: "12px" }}>
                            {t("phone")}: 0268 420 832
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant="body2" color="#656565" align="center" sx={{ fontSize: "12px" }}>
                        {"Copyright © "}
                        <Link color="inherit" href="https://your-website.com/">
                            Dacona
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}