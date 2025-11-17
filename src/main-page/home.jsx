import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import BenefitsSection from "../components/BenefitsSection";
import AboutSection from "../components/AboutSection";
// import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";
import Testimonial from "@/components/TestimonialsSection";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductsSection />
      <BenefitsSection />
      <AboutSection />
      {/* <ProcessSection /> */}
      <Testimonial />
      <Footer />
    </div>
  );
}

export default LandingPage;
