import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStays from './components/OurStays';
import BookingForm from './components/BookingForm';
import WhyChooseUs from './components/WhyChooseUs';
import LocationMap from './components/LocationMap';
import BookWithUs from './components/BookWithUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';

export default function Home() {
  return (
    <main className='min-h-screen text-white'>
      <Navigation />
      <Hero />
      <section id='our-stays'>
        <OurStays />
      </section>
      <section id='booking'>
        <BookingForm />
      </section>
      <section id='why-choose-us'>
        <WhyChooseUs />
      </section>
      <section id='booking-platforms'>
        <BookWithUs />
      </section>
      <section id='testimonials'>
        <Testimonials />
      </section>
      <section id='location'>
        <LocationMap />
      </section>
      <section id='contact'>
        <Footer />
      </section>
      <FloatingActionButtons />
    </main>
  );
}
