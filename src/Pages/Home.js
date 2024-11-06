import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import { Container } from "../Components/Container";

function Home() {
  return (
    <div className="home-section">
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <Container>
        <Info />
      </Container>
      <About />
      <Container>
        <BookAppointment />
      </Container>
      <Reviews />
      <Container>
        <Doctors />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
