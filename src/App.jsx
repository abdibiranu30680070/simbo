import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Team from './components/team';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Appointment />
      <About />
      <Services />
      <Team />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
