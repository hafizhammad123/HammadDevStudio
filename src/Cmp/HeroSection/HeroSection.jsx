import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: "80px", sm: "60px", md: "120px" },
        pb: { xs: "40px", sm: "60px", md: "100px" },
        background: "linear-gradient(135deg, #e0e6f9ff 0%, #f8faff 100%)",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          right: "-120px",
          width: { xs: "240px", md: "380px" },
          height: { xs: "240px", md: "380px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, sm: 8, md: 6 }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: "560px", width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              

              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "32px", md: "42px" },
                  fontWeight: 800,
                  lineHeight: { xs: 1.2, md: 1.1 },
                }}
              >
                Become a Professional <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  Website Developer
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: { xs: "16px", md: "24px" },
                  fontSize: { xs: "14px", sm: "15px", md: "18px" },
                  color: "text.secondary",
                  maxWidth: "520px",
                }}
              >
                Zero to job-ready Full-Stack developer with real-world projects,
                expert mentorship, portfolio building & placement support.
              </Typography>

              <Typography
                sx={{
                  mt: "14px",
                  fontWeight: 600,
                  color: "primary.main",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Secure your child’s future with in-demand IT skills today!
              </Typography>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: "28px", width: "100%" }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    px: { xs: "20px", sm: "28px" },
                    py: { xs: "10px", sm: "12px" },
                    fontSize: { xs: "14px", sm: "15px" },
                    borderRadius: "10px",
                  }}
                >
                  Start Learning Now
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    px: { xs: "20px", sm: "28px" },
                    py: { xs: "10px", sm: "12px" },
                    fontSize: { xs: "14px", sm: "15px" },
                    borderRadius: "10px",
                  }}
                >
                  Book Free Demo Class
                </Button>
              </Stack>
            </motion.div>
          </Box>

          {/* RIGHT IMAGE */}
          <Box sx={{ position: "relative", maxWidth: "420px", width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Paper elevation={8} sx={{ borderRadius: "20px", overflow: "hidden" }}>
                <img
                  src="../../../public/Images/student hero.jpg"
                  alt="Student coding on laptop"
                  style={{ width: "100%", display: "block" }}
                />
              </Paper>

              {/* Floating Code Card */}
              <Paper
                elevation={8}
                sx={{
                  position: "absolute",
                  bottom: { xs: "-40px", md: "-50px" },
                  left: { xs: "50%", md: "-40px" },
                  transform: { xs: "translateX(-50%)", md: "none" },
                  width: { xs: "260px", sm: "300px" },
                  p: "16px",
                  borderRadius: "14px",
                  background: "#0f172a",
                  color: "#e5e7eb",
                }}
              >
                <Typography sx={{ fontSize: "11px", color: "#38bdf8", mb: "6px" }}>
                  App.jsx
                </Typography>
                <Box
                  component="pre"
                  sx={{ m: 0, fontSize: "11px", fontFamily: "monospace", lineHeight: 1.5 }}
                >
{`function App() {
  return (
    <HeroSection />
  )
}`}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
