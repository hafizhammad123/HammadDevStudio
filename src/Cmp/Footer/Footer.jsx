import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        pt: { xs: "50px", md: "70px" },
        pb: "30px",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* TOP CONTENT */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {/* BRAND */}
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 800,
                  mb: "10px",
                }}
              >
                Hammad Dev Studio
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#9ca3af",
                  maxWidth: "300px",
                }}
              >
                We don’t just teach coding — we build careers with real-world
                skills and professional guidance.
              </Typography>
            </Box>

            {/* CONTACT */}
            <Box>
              <Typography sx={{ fontWeight: 700, mb: "10px" }}>
                Contact
              </Typography>

              <Stack spacing={1}>
                <Typography sx={{ fontSize: "14px", color: "#d1d5db" }}>
                  WhatsApp: +92 334 1772369
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#d1d5db" }}>
                  Email: muhammadhammadfullstackdevelop@gmail.com
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#d1d5db" }}>
                  Location: FB Area, Near Trimax Hospital, Block 9, R-645 Plot, Back Side Entrance, 2nd Floor
                </Typography>
              </Stack>
            </Box>

            {/* SOCIAL */}
            <Box>
              <Typography sx={{ fontWeight: 700, mb: "10px" }}>
                Follow Us
              </Typography>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: "center", md: "flex-start" }}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/hafizhammadjs/"
                  target="_blank"
                  sx={{ color: "#e5e7eb" }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61573202874816"
                  target="_blank"
                  sx={{ color: "#e5e7eb" }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://wa.me/923341772369"
                  target="_blank"
                  sx={{ color: "#e5e7eb" }}
                >
                  <WhatsAppIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:muhammadhammadfullstackdevelop@gmail.com"
                  sx={{ color: "#e5e7eb" }}
                >
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          {/* BOTTOM */}
          <Typography
            sx={{
              fontSize: "13px",
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Hammad Dev Studio. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
