import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const StudentDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", bgcolor: "#f4f6fb", minHeight: "100vh" }}>
      {/* Sidebar */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              bgcolor: "#0b2c6d",
              color: "#fff",
              borderRadius: "0 24px 24px 0",
            },
          }}
        >
          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack spacing={1} alignItems="center">
              <img src="../../../Images/whitelogo-01.png" alt="logo" width="140" />
              <Typography fontWeight="bold">Student Portal</Typography>
            </Stack>

            <List>
              <ListItem button>
                <ListItemIcon sx={{ color: "#fff" }}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>

              {/* <ListItem button>
                <ListItemIcon sx={{ color: "#fff" }}>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Student Card" />
              </ListItem> */}

              <ListItem button>
                <ListItemIcon sx={{ color: "#fff" }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Stack>
        </Drawer>
      )}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        {/* Header */}
        <Card
          sx={{
            mb: 3,
            background: "linear-gradient(135deg,#123a8f,#1b5fcf)",
            color: "#fff",
            borderRadius: 4,
          }}
        >
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Welcome back, Hammad 👋
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Your complete class & course information
                </Typography>
              </Box>

              <Avatar
                src="https://greenwoodhigh.edu.in/wp-content/uploads/2023/09/PV3_6175-ANISH-VIVEK.jpg"
                sx={{ width: 100, height: 110, border: "3px solid #fff" }}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Fee + Class Information */}
        <Card sx={{ borderRadius: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Class Information
            </Typography>

            <Typography variant="body2" color="text.secondary">
              💰 Course Fee: <b>Rs. 6,000</b> (Fee Submitted Successfully)
            </Typography>

            <Typography variant="body2" color="text.secondary">
              📅 Class Days: <b>Monday, Tuesday, Friday</b>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ⏰ Class Timing: <b>5:00 PM – 7:00 PM</b>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ⏳ Course Duration: <b>1 Feb 2026 – 10 April 2026</b>
            </Typography>

            <Typography variant="caption" color="text.secondary">
              *Eid holidays ki wajah se course duration thora extend hua hai.
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" color="text.secondary">
              📍 <b>Class Location:</b>
              <br />
              FB Area, Near Trimax Hospital  
              <br />
              Block 9, R-645 Plot  
              <br />
              Back Side Entrance, 2nd Floor
            </Typography>
          </CardContent>
        </Card>

        {/* Course Details */}
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Web Development (Basic Level) – Course Details
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Ye <b>Basic Level Course</b> specially un students ke liye design
              kiya gaya hai jo web development bilkul start se seekhna chahte
              hain. Is course ka main purpose students ko strong
              <b> foundation aur understanding</b> dena hai — taake aage ja kar
              wo advanced level courses easily samajh saken.
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography fontWeight="bold">HTML</Typography>
                <Typography variant="body2" color="text.secondary">
                  Website ka structure banana, headings, text, images, forms aur
                  complete page layout samajhna.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography fontWeight="bold">CSS</Typography>
                <Typography variant="body2" color="text.secondary">
                  Website design karna, colors, layouts, responsive (mobile
                  friendly) pages banana.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography fontWeight="bold">JavaScript</Typography>
                <Typography variant="body2" color="text.secondary">
                  Website me logic add karna, buttons working banana, basic user
                  interaction aur validations.
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" color="text.secondary">
              👉 <b>Note:</b> Is basic level ke baad students
              <b> Advanced Web Development Course</b> join kar sakte hain, jahan
              wo <b>AI integration</b>, <b>real-world full websites</b>,
              professional projects aur complete MERN stack development seekhte
              hain.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
