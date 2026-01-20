import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        mt: { xs: "10px", md: "20px" },
        py: { xs: "60px", sm: "80px", md: "120px" },
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0a80ffff 0%, #312e81 50%, #1e40af 100%)",
      }}
    >
      {/* Decorative glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.45), transparent 70%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Stack
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          textAlign="center"
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "32px", md: "48px" },
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: { xs: 1.2, md: 1.1 },
                mb: "10px",
              }}
            >
              Start Your IT Career Today
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px", md: "16px" },
                color: "rgba(255,255,255,0.85)",
                maxWidth: "520px",
                mx: "auto",
              }}
            >
              Limited seats for personal mentoring.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              width: "100%",
              justifyContent: "center",
              maxWidth: "420px",
            }}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: "10px",
                borderRadius: "14px",
                fontSize: "15px",
                fontWeight: 700,
                background: "#ffffff",
                color: "#0f172a",
                boxShadow: "0 16px 30px rgba(0,0,0,0.35)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #38bdf8, #22d3ee)",
                },
              }}
            >
              Book Free Demo
            </Button>

            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              fullWidth
              variant="outlined"
              size=""
              sx={{
                py: "10px",
                borderRadius: "14px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#ffffff",
                borderColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(6px)",
                backgroundColor: "rgba(255,255,255,0.08)",
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "rgba(255,255,255,0.16)",
                },
              }}
            >
              Enroll Now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToActionSection;
