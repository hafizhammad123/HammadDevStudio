import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Layout from "../Layout";

const steps = [
  {
    title: "Step 1 – Basics",
    points: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Step 2 – Advanced",
    points: [
      "React.js",
      "Next.js",
      "MUI",
      "Firebase",
      "MongoDB",
      "Express.js",
      "Nest.js",
      "Node.js",
      "AI Integration",
      "Ai Chatbots",
      "and More...",
    ],
  },
  {
    title: "Extra",
    points: [
      "Interview Preparation",
      "Certificate",
      "Hackathons",
      "Real Application Workflow",
      "Freelancing Guidance",
      "Github Profile Setup",
      "Resume Building",
      "Protfolio Building",
    ],
  },
];

const LearningJourneySection = () => {
  return (
    <>
 
      <Box sx={{ py: { xs: "40px", md: "80px" }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          {/* SECTION HEADER */}
          <Stack spacing={2} alignItems="center" sx={{ mb: { xs: 5, md: 8 } }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              Your Learning Journey
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "32px", md: "38px" },
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Step-by-Step Path to Become <br /> a Professional Developer
            </Typography>
          </Stack>

          {/* STEPS */}
          <Stack spacing={{ xs: 4, md: 6 }}>
            {steps.map((step, index) => (
              <Paper
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                elevation={0}
                sx={{
                  p: { xs: "22px", md: "32px" },
                  borderRadius: "16px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fafafa",
                }}
              >
                <Stack spacing={2.5}>
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      fontWeight: 700,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1.2}
                  >
                    {step.points.map((item, i) => (
                      <Chip
                        key={i}
                        label={item}
                        sx={{
                          fontSize: "13px",
                          fontWeight: 500,
                          backgroundColor: "#eef2ff",
                          color: "#1e3a8a",
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>


    </>

  );
};

export default LearningJourneySection;
