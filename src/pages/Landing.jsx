import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <>
        <div style={heroSectionStyle}>
            <Navbar />
            <Hero />
        </div>
            <ImageGallery />
            <Testimonial />
            <CallToAction />
            <Footer />
        </>
    )
}


const heroSectionStyle = {
    background: "url(https://i.postimg.cc/j2XMCYf6/image.png) center/cover",
    color: "#fff",
  };

export default Landing
