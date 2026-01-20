import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const ParentsTrustSection = () => {
  return (
    <Box
      sx={{
        py: { xs: "20px", md: "60px" },
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
          <Box
            sx={{
              maxWidth: "520px",
              order: { xs: 1, md: 1 },
            }}
          >
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
                For Parents
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "30px", md: "36px" },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: "22px",
                }}
              >
                Why Parents Should Trust Us
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                Hum sirf coding nahi sikhate, hum aapke bachche ka career banate
                hain. Progress reports, discipline, guidance aur professional
                environment diya jata hai — taake students sirf seekhein nahi,
                balkay grow karein.
              </Typography>
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
            {/* background block */}
            <Box
              sx={{
                position: "absolute",
                right: "-15px",
                bottom: "-18px",
                width: "100%",
                height: "100%",
                backgroundColor: "#ff0000ff",
                borderRadius: "12px",
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
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src="../../../Images/parents turst.jpg"
                alt="Parents trust and guidance"
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ParentsTrustSection;
