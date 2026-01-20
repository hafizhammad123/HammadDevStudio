import React from "react";
import {
    Box,
    Container,
    Typography,
    Stack,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Footer, Navbar } from "../../Cmp";
import Layout from "../../Cmp/Layout";

const ContactUs = () => {
    return (
        <Layout>
   
            <Box
                sx={{
                    py: { xs: "60px", md: "100px" },
                    background: "linear-gradient(180deg, #f8faff, #ffffff)",
                    overflowX: "hidden",
                }}
            >
                <Container maxWidth="lg">
                    {/* HEADER */}
                    <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "primary.main",
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "28px", sm: "34px", md: "40px" },
                                fontWeight: 800,
                            }}
                        >
                            Let’s Talk About Your Career
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                color: "text.secondary",
                                maxWidth: "520px",
                            }}
                        >
                            Have questions? Want a demo class?
                            We’re here to guide you step by step.
                        </Typography>
                    </Stack>

                    {/* MAIN CONTENT */}
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 6, md: 8 }}
                        alignItems="stretch"
                    >
                        {/* LEFT INFO */}
                        <Paper
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            elevation={0}
                            sx={{
                                flex: 1,
                                p: { xs: "22px", md: "32px" },
                                borderRadius: "16px",
                                border: "1px solid #e5e7eb",
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <Stack spacing={3}>
                                <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
                                    Hammad Dev Studio
                                </Typography>

                                <Typography sx={{ fontSize: "15px", color: "text.secondary" }}>
                                    We don’t just teach coding —
                                    we build careers with discipline, guidance & real skills.
                                </Typography>

                                <Stack spacing={1.5}>
                                    <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                                        📞 WhatsApp
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
                                        +92 334 1772369
                                    </Typography>

                                    <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                                        📧 Email
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
                                        muhammadhammadfullstackdevelop@gmail.com
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Paper>

                        {/* RIGHT FORM */}
                        <Paper
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            elevation={0}
                            sx={{
                                flex: 1,
                                p: { xs: "22px", md: "32px" },
                                borderRadius: "16px",
                                border: "1px solid #e5e7eb",
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <Stack spacing={2.5}>
                                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                                    Send Us a Message
                                </Typography>

                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    size="small"
                                />

                                <TextField
                                    fullWidth
                                    label="Phone / WhatsApp"
                                    size="small"
                                />

                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    size="small"
                                />

                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    multiline
                                    rows={4}
                                    size="small"
                                />

                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        mt: 1,
                                        py: "12px",
                                        fontWeight: 700,
                                        borderRadius: "12px",
                                    }}
                                >
                                    Submit Message
                                </Button>
                            </Stack>
                        </Paper>
                    </Stack>
                </Container>
            </Box>

        </Layout>

    );
};

export default ContactUs;
