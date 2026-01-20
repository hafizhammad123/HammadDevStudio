import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Layout from "../Layout";

const ProblemSection = () => {
  return (
    <>
   
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          backgroundColor: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 10 }}
            alignItems="center"
          >
            {/* LEFT IMAGE */}
            <Box sx={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              {/* background block */}
              <Box
                sx={{
                  position: "absolute",
                  left: "-15px",
                  bottom: "-18px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ff6a3d",
                  borderRadius: "12px",
                  zIndex: 1,
                }}
              />

              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -40 }}
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
                  src="../../../public/Images/problame.jpg"
                  alt="Student Problem"
                  style={{ width: "100%", display: "block" }}
                />
              </Box>
            </Box>

            {/* RIGHT CONTENT */}
            <Box sx={{ maxWidth: "520px" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "26px", sm: "30px", md: "36px" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: "20px",
                  }}
                >
                  Why Most Students Fail in Programming?
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    color: "text.secondary",
                    mb: "18px",
                  }}
                >
                  Aaj ke students YouTube aur random courses se seekhte hain lekin:
                </Typography>

                <Stack spacing={1.4} sx={{ mb: "20px" }}>
                  {[
                    "Unka logic weak hota hai",
                    "Real projects nahi bante",
                    "Interview clear nahi hota",
                    "Freelancing nahi kar paate",
                  ].map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: { xs: "14px", md: "15px" },
                        fontWeight: 500,
                      }}
                    >
                      • {item}
                    </Typography>
                  ))}
                </Stack>

                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  Hammad Dev Studio in problems ko step by step solve karta hai.
                </Typography>
              </motion.div>
            </Box>
          </Stack>
        </Container>
      </Box>

    </>

  );
};

export default ProblemSection;
