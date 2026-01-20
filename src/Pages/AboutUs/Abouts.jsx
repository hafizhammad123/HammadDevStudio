import React from "react";
import {
    Box,
    Container,
    Typography,
    Stack,
} from "@mui/material";
import { Footer, Navbar } from "../../Cmp";
import Layout from "../../Cmp/Layout";


const AboutPage = () => {
    return (
        <Layout>
            {/* ================= INTRO SECTION ================= */}
            <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#ffffff" }}>
                <Container maxWidth="md">
                    <Stack spacing={3}>
                        <Typography sx={{ fontSize: 14, fontWeight: 600, color: "primary.main" }}>
                            Introduction
                        </Typography>

                        <Typography sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 800 }}>
                            About Me
                        </Typography>

                        <Typography sx={{ fontSize: 16, color: "text.secondary", lineHeight: 1.9 }}>
                            I am <strong>Hafiz Hammad</strong>, a MERN Stack Developer with over
                            2+ years of hands-on experience in modern web application development.
                            I am currently working as an Assistant Teacher at
                            <strong> SMIT (Saylani Mass IT Training Program)</strong>, where I help
                            students learn practical development skills and industry best practices.
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            {/* ================= IMAGE LEFT / TEXT RIGHT ================= */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 6, md: 10 }}
                        alignItems="center"
                    >
                        {/* IMAGE */}
                        <Box sx={{ position: "relative", maxWidth: 500, width: "100%" }}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "-14px",
                                    bottom: "-14px",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#288afe",
                                    borderRadius: 3,
                                }}
                            />
                            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden" }}>
                                <img
                                    src="../../../public/Images/Untitled-4-01.jpg"
                                    alt="Experience"
                                    style={{ width: "100%", display: "block" }}
                                />
                            </Box>
                        </Box>

                        {/* TEXT */}
                        <Box sx={{ maxWidth: 520 }}>
                            <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 2 }}>
                                Real Industry Experience
                            </Typography>

                            <Typography sx={{ fontSize: 15, color: "text.secondary", lineHeight: 1.8 }}>
                                I have completed my professional development course from SMIT
                                and worked on multiple real-world projects using
                                <strong> MongoDB, Express.js, React.js, and Node.js</strong>.
                                These projects helped me understand real client requirements,
                                scalable architecture, and professional workflows.
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* ================= TEXT LEFT / IMAGE RIGHT ================= */}
            <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f9fafb" }}>
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row-reverse" }}
                        spacing={{ xs: 6, md: 10 }}
                        alignItems="center"
                    >
                        {/* IMAGE */}
                        <Box sx={{ position: "relative", maxWidth: 500, width: "100%" }}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: "-14px",
                                    bottom: "-14px",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#0ea5e9",
                                    borderRadius: 3,
                                }}
                            />
                            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden" }}>
                                <img
                                    src="../../../public/Images/hamammmm.jpg"
                                    alt="Teaching"
                                    style={{ width: "100%", display: "block" }}
                                />
                            </Box>
                        </Box>

                        {/* TEXT */}
                        <Box sx={{ maxWidth: 520 }}>
                            <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 2 }}>
                                Passion for Teaching
                            </Typography>

                            <Typography sx={{ fontSize: 15, color: "text.secondary", lineHeight: 1.8 }}>
                                I am passionate about teaching, continuous learning,
                                and mentoring students. I strongly believe that strong fundamentals,
                                logical thinking, and hands-on practice are the keys to success
                                in the tech industry.
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* ================= GOAL & TRUST SECTION ================= */}
            <Box sx={{ py: { xs: 7, md: 12 }, backgroundColor: "#ffffff" }}>
                <Container maxWidth="md">
                    <Stack spacing={4} textAlign="center">
                        <Typography sx={{ fontSize: 28, fontWeight: 800 }}>
                            Hammad Dev Studio Goal
                        </Typography>

                        <Typography sx={{ fontSize: 16, lineHeight: 1.9, color: "text.secondary" }}>
                            My goal is not only to grow as a developer myself, but also to train
                            students to become
                            <strong> top-level MERN Stack Developers</strong>.
                            At <strong>Hammad Dev Studio</strong>, we focus on real skills,
                            real projects, and real career growth.
                        </Typography>

                        <Typography sx={{ fontSize: 16, lineHeight: 1.9 }}>
                            We actively use
                            <strong> AI tools and modern technologies</strong> to build
                            scalable, market-ready, and professional applications
                            that solve real-world problems.
                        </Typography>

                        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "primary.main" }}>
                            Our mission:
                            <br />Turn students into confident, job-ready developers 🚀
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        
        </Layout>
    );
};

export default AboutPage;
