import { AboutSection, CallToActionSection, Footer, HeroSection, LearningJourneySection, Navbar, ParentsTrustSection, ProblemSection, WhatWeOfferSection } from "../../Cmp"
import Layout from "../../Cmp/Layout"
import About from "../AboutUs/Abouts"
import ContactUs from "../ContactUsPage/ContactUs"


const Home = () => {
    return (
        <Layout>
           
            <HeroSection />
            <ProblemSection />
            <WhatWeOfferSection />
            <LearningJourneySection />
            <ParentsTrustSection />
            <AboutSection />
            <CallToActionSection />
          
          

        </Layout>
    )
}

export default Home