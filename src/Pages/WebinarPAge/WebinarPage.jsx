import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../../Cmp/Layout";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";

/**
 * 👉 Webinar date yahan control karo
 * null => no webinar (sirf youtube show hoga)
 */
const WEBINAR_DATE = new Date("2026-01-24T15:00:00"); // ✅ 24 Jan 2026, 3:00 PM

const WebinarSection = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const navigate = useNavigate();

  // ✅ separate states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!WEBINAR_DATE) return;

    const timer = setInterval(() => {
      const now = new Date();
      const diff = WEBINAR_DATE - now;

      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const showWebinar = WEBINAR_DATE && timeLeft;

  // ✅ submit handler
  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all fields ❗");
      return;
    }

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "WebinarData"), {
      name,
      email,
      phone,
    });
    console.log("Document written with ID: ", docRef.id);

    alert("🎉 Successfully Registered for Webinar!");
    navigate("/group");

    // reset form
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Layout>
      <Box
        sx={{
          py: { xs: "60px", md: "100px" },
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={5} alignItems="center">
            {/* HEADER */}
            <Typography
              sx={{
                fontSize: { xs: 26, sm: 32, md: 38 },
                fontWeight: 900,
                color: "#fff",
                textAlign: "center",
              }}
            >
              Free Live Webinar
            </Typography>

            {/* COUNTDOWN */}
            {showWebinar && (
              <Stack
                direction="row"
                spacing={2}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {Object.entries(timeLeft).map(([key, value]) => (
                  <Box
                    key={key}
                    sx={{
                      px: 2.5,
                      py: 1.5,
                      borderRadius: "14px",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                      minWidth: "70px",
                    }}
                  >
                    <Typography fontSize={20} fontWeight={800}>
                      {value}
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                      {key}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            )}

            {/* FORM / VIDEO */}
            {showWebinar ? (
              <Paper
                elevation={0}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                sx={{
                  p: { xs: 3, sm: 4 },
                  width: "100%",
                  maxWidth: "480px",
                  borderRadius: "20px",
                }}
              >
                <Stack spacing={2.5}>
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 800,
                      textAlign: "center",
                    }}
                  >
                    Register for Webinar
                  </Typography>

                  <TextField
                    fullWidth
                    label="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="+92 3XX XXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    sx={{
                      py: 1.4,
                      borderRadius: "14px",
                      fontWeight: 700,
                    }}
                  >
                    Join Free Webinar
                  </Button>
                </Stack>
              </Paper>
            ) : (
              /* YOUTUBE VIDEO */
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                sx={{
                  width: "100%",
                  maxWidth: "720px",
                  aspectRatio: "16 / 9",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Hammad Dev Studio Webinar"
                  frameBorder="0"
                  allowFullScreen
                />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};

export default WebinarSection;
