import { Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { About, EnrollmentSubmitted, EnrollNow, Home, LearningJourneySection, LoginPage, ProblemSection, StudentDashboard, WhatsApp } from './Pages';
import ContactUs from './Pages/ContactUsPage/ContactUs';
import WebinarSection from './Pages/WebinarPAge/WebinarPage';
import { Footer, Navbar } from './Cmp';

function App() {
  const location = useLocation();
 

  return (
    <Box sx={{ overflowX: "hidden" }}>
    

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/webinar' element={<WebinarSection />} />
        <Route path='/EnrollNow' element={<EnrollNow />} />
        <Route path='/student-protel' element={<StudentDashboard />} />
        <Route path='/enrollment-submitted' element={<EnrollmentSubmitted />} />
        <Route path='/courses' element={<LearningJourneySection />} />
        <Route path='/why-us' element={<ProblemSection />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/group' element={<WhatsApp />} />
      </Routes>

    </Box>
  );
}

export default App;
