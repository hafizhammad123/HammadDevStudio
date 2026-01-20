import React from "react";
import {
    Box,
    Container,
    Typography,
    Stack,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const offers = [
    { title: "Onsite Classes", desc: "Real teacher, real time learning" },
    { title: "Project Based Learning", desc: "OLX, Blogs, Dashboards, APIs" },
    { title: "One-to-One Support", desc: "Har student ko personal help" },
    { title: "Career Support", desc: "CV, GitHub, Freelancing, Interview prep, Hackathons" },
];

const WhatWeOfferSection = () => {
    return (
        <Box
            sx={{
                py: { xs: "30px", sm: "30px", md: "40px" },
                backgroundColor: "#ffffff",
                overflowX: "hidden", // ✅ IMPORTANT
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 6, md: 10 }}
                    alignItems="center"
                >
                    {/* LEFT CONTENT */}
                    <Box sx={{ maxWidth: "560px", width: "100%" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "primary.main",
                                    mb: "10px",
                                }}
                            >
                                What We Offer
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "26px", sm: "30px", md: "36px" },
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    mb: "28px",
                                }}
                            >
                                What You Get at <br />
                                Hammad Dev Studio
                            </Typography>

                            <Stack spacing={2.2}>
                                {offers.map((item, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: "18px",
                                            borderRadius: "12px",
                                            border: "1px solid #e5e7eb",
                                            transition: "all .3s ease",
                                            "&:hover": {
                                                boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                                                transform: "translateY(-3px)",
                                            },
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                color: "text.secondary",
                                                mt: "4px",
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </motion.div>
                    </Box>

                    {/* RIGHT IMAGE */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            maxWidth: "560px",
                            px: { xs: 1.5, sm: 2, md: 0 },
                        }}
                    >
                        {/* background block */}
                        <Box
                            sx={{
                                position: "absolute",
                                right: { xs: 0, md: "-14px" }, // ✅ xs pe zero
                                bottom: { xs: "-8px", md: "-16px" },
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#6366f1",
                                borderRadius: "16px",
                                zIndex: 1,
                            }}
                        />


                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                borderRadius: "16px",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="../../../Images/offere.jpg"
                                alt="What we offer"
                                style={{
                                    width: "100%",
                                    display: "block",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default WhatWeOfferSection;
