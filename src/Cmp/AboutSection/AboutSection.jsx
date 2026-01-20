import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: "70px", md: "110px" },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: "520px", order: { xs: 1, md: 1 } }}>
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
                About Instructor
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "30px", md: "36px" },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: "20px",
                }}
              >
                I am Hafiz Hammad
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "text.secondary",
                  mb: "18px",
                }}
              >
                A MERN Stack Developer with 2+ years of experience and an
                Assistant Teacher at SMIT. I have completed my development
                course from SMIT and worked on real-world MERN projects.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  mb: "26px",
                }}
              >
                My goal is to train students to become professional MERN Stack
                Developers, using AI tools to build market-ready and modern
                applications.
              </Typography>

              {/* SEE MORE */}
              <Button
                component={motion.button}
                whileHover={{ x: 6 }}
                variant="text"
                sx={{
                  px: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "primary.main",
                  textTransform: "none",
                }}
              >
                See More →
              </Button>
            </motion.div>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              order: { xs: 2, md: 2 },
              px: { xs: 2, sm: 3, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: "-18px",
                bottom: "-18px",
                width: "100%",
                height: "100%",
                backgroundColor: "#288afe",
                borderRadius: "14px",
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
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <img
                src="../../../Images/Untitled-4-01.jpg"
                alt="Hafiz Hammad"
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSection;
