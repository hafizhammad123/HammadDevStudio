import React from "react";
import Layout from "../Cmp/Layout";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsApp = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: "80px", // ✅ top 60px margin
          px: 2,
          backgroundColor: "#f5f7fa",
        }}
      >
        <Card
          sx={{
            maxWidth: 420,
            width: "100%",
            borderRadius: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <CardContent sx={{ textAlign: "center", p: 4 }}>
            
            {/* Logo */}
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src="../../Images/final-01.png"
                alt="Hammad Dev Studio"
                sx={{
                  width: 90,
                  height: 90,
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
            </Box>

            {/* Heading */}
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
            >
              Join Our WhatsApp Group
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Get webinar updates, Website Development learning resources,
              and important announcements directly on WhatsApp.
            </Typography>

            {/* Button */}
            <Button
              fullWidth
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://chat.whatsapp.com/I6BrWf1y9Nq4fYU9t6wEje"
              target="_blank"
              sx={{
                backgroundColor: "#25D366",
                py: 1.4,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#1ebe5d",
                },
              }}
            >
              Join WhatsApp Group
            </Button>

            {/* Footer */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 3 }}
            >
              Powered by <b>Hammad Dev Studio</b>
            </Typography>

          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default WhatsApp;
