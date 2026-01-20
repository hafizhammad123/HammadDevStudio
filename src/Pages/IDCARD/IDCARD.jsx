// import React, { useRef } from "react";
// import { Box, Card, CardContent, Typography, Button, Avatar, Stack } from "@mui/material";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const StudentIDCard = () => {
//     const cardRef = useRef();

//     const student = {
//         name: "Hammad Memon",
//         roll: "HD-101",
//         phone: "+92 3001234567",
//         photo: "https://greenwoodhigh.edu.in/wp-content/uploads/2023/09/PV3_6175-ANISH-VIVEK.jpg",
//     };


//     const handleDownload = () => {
//         const input = cardRef.current;
//         html2canvas(input, { scale: 3 }).then((canvas) => {
//             const imgData = canvas.toDataURL("image/png");
//             const pdf = new jsPDF({
//                 orientation: "landscape",
//                 unit: "mm",
//                 format: [54, 85.6], // CR80 standard ID card size (mm)
//             });
//             pdf.addImage(imgData, "PNG", 0, 0, 85.6, 54);
//             pdf.save(`${student.name}_ID_Card.pdf`);
//         });
//     };

//     return (
//         <Box>
//             {/* ID Card Preview */}
//             <Card
//                 ref={cardRef}
//                 sx={{
//                     width: 340, // on-screen preview
//                     height: 210,
//                     borderRadius: 3,
//                     p: 2,
//                     bgcolor: "#0b2c6d",
//                     color: "#fff",
//                     boxShadow: 3,
//                 }}
//             >
//                 <CardContent sx={{ p: 2 }}>
//                     <Stack direction="row" spacing={2} alignItems="center">
//                         {/* Logo */}
//                         <Avatar
//                             src="../../../Images/whitelogo-01.png"
//                             sx={{ width: 60, height: 60 }}
//                             variant="rounded"
//                         />

//                         <Box>
//                             <Typography variant="h6" fontWeight="bold">
//                                 Hammad Dev Studio
//                             </Typography>
//                             <Typography variant="caption">
//                                 Contact: +92 3341772369
//                             </Typography>
//                         </Box>
//                     </Stack>

//                     <Box sx={{ mt: 3, textAlign: "center" }}>
//                         <Avatar
//                             src={student.photo}
//                             sx={{ width: 80, height: 100, border: "2px solid #fff", mb: 1 }}
//                         />
//                         <Typography variant="subtitle1" fontWeight="bold">
//                             {student.name}
//                         </Typography>
//                         <Typography variant="body2">Roll No: {student.roll}</Typography>
//                         <Typography variant="body2">Phone: {student.phone}</Typography>
//                     </Box>
//                 </CardContent>
//             </Card>

//             {/* Download Button */}
//             <Button
//                 variant="contained"
//                 sx={{ mt: 2, textTransform: "none" }}
//                 onClick={handleDownload}
//             >
//                 Download PDF
//             </Button>
//         </Box>
//     );
// };

// export default StudentIDCard;
