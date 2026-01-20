import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockIcon from "@mui/icons-material/Lock";

export default function EnrollmentSubmitted() {
  return (
    
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f4f6fb",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 620,
          width: "100%",
          borderRadius: 4,
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        <CardContent>
          <Stack spacing={3} alignItems="center" textAlign="center">
            {/* Institute Logo */}
            <Box
            component={"img"}
              src="../../../Images/final-01.png"
              alt="Institute Logo"
              sx={{
               
                height: 90,
                bgcolor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                mb: 1,
              }}
            />
            {/* Success Icon */}
            <Avatar
              sx={{ bgcolor: "#e8f5e9", width: 80, height: 80 }}
            >
              <CheckCircleIcon sx={{ fontSize: 46, color: "#2e7d32" }} />
            </Avatar>

            <Typography variant="h5" fontWeight="bold">
              Enrollment Submitted Successfully 🎉
            </Typography>

            <Typography color="text.secondary">
              Your enrollment has been successfully submitted. Our team will
              verify your fee payment screenshot shortly.
            </Typography>

            {/* Student Details */}
            <Box
              sx={{
                width: "100%",
                bgcolor: "#fafbff",
                borderRadius: 3,
                p: 2,
                textAlign: "left",
              }}
            >
              <Typography fontWeight="bold" mb={1}>
                Student Details
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body2">
                <b>Name:</b> John Doe
              </Typography>
              <Typography variant="body2">
                <b>Email:</b> johndoe@email.com
              </Typography>
              <Typography variant="body2">
                <b>Phone:</b> +92 300 1234567
              </Typography>
            </Box>

            {/* Screenshot */}
            <Box
              sx={{
                width: "100%",
                bgcolor: "#f1f5ff",
                borderRadius: 3,
                p: 2,
              }}
            >
              <Typography fontWeight="bold" mb={1}>
                Fee Payment Screenshot (Demo)
              </Typography>
              <Box
                component="img"
                src="https://imgv2-1-f.scribdassets.com/img/document/642581388/original/1aec5fcc1f/1?v=1"
                alt="Fee Screenshot"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                }}
              />
            </Box>

            {/* Next Steps */}
            <Box
              sx={{
                width: "100%",
                bgcolor: "#f1f5ff",
                borderRadius: 3,
                p: 2,
                textAlign: "left",
              }}
            >
              <Typography fontWeight="bold" mb={1}>
                What happens next?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • After verification, <b>we will provide your Roll Number and
                Student Portal password</b>.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • You will be able to log in to the Student Portal using the
                provided credentials.
              </Typography>
            </Box>

            {/* Trust Message */}
            <Stack direction="row" spacing={1} alignItems="center">
              <LockIcon color="primary" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                Your information is safe and will only be used for enrollment
                purposes.
              </Typography>
            </Stack>

            <Typography variant="caption" color="text.secondary">
              Please wait patiently. Verification usually takes a short time.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: 3, textTransform: "none", px: 4 }}
            >
              Back to Home
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
