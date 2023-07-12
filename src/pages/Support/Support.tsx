import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Alert, Box, Button, CardActions, CircularProgress, Grid, InputLabel, Paper, Snackbar, TextField, Typography } from "@mui/material";


const Support = () => {
    const form: any = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm('service_aikx78a', 'template_f7wn2ue', form.current, 'BGi0Sy-F10hIKYEmp')
            .then((result) => {
                setOpen(true)
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ p: 2 }}>
                    <form ref={form} onSubmit={sendEmail}>

                        <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
                            <Box sx={{ padding: 2 }}>
                                <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                    Request an offer
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Name
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id="from_name"
                                            name="user_name"
                                            label="Full Name"
                                            fullWidth
                                            size="medium"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Email
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            type="email"
                                            name="user_email"
                                            label="Email"
                                            fullWidth
                                            size="medium"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Phone Number
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id="author"
                                            name="reply_to"
                                            label="PhoneNumber"
                                            fullWidth
                                            size="medium"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Message
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id="outlined-multiline-static"
                                            label="Message"
                                            multiline
                                            fullWidth
                                            rows={4}
                                            name="message"
                                            size="medium"
                                        />
                                    </Grid>
                                </Grid>
                                <CardActions sx={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                                    <Button
                                        type="submit"
                                        variant='contained'
                                        sx={{
                                            backgroundColor: "#008478",
                                            padding: 1.5,
                                            "&:hover": { backgroundColor: "#034640" }
                                        }}
                                        disabled={isLoading}
                                        endIcon={isLoading ? <CircularProgress size={20} /> : null}
                                    >
                                        Send Offer
                                    </Button>
                                </CardActions>
                            </Box>
                        </Paper>
                    </form>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                message="Mail has been sent!"
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Mail has been sent!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Support;