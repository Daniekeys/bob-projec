import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";
import Hero from "../components/landingpage/Hero";
import About from "../components/landingpage/About";
import Partner from "../components/landingpage/Partner";
import Events from "../components/landingpage/Events";
import Area from "../components/landingpage/Area";
import Testimonial from "../components/landingpage/Testimonial";
import Footer from "../components/landingpage/Footer";
import MobileFooter from "../components/landingpage/MobileFooter";
import Services from "../components/landingpage/Services";
import WhyChoose from "../components/landingpage/WhyChoose";
import Contact from "../components/landingpage/Contact";




export default function Home() {
  return (
    <>
      <Head>
        <title>2514 KB ELEOS</title>
        <meta
          name="description"
          content="2514 KB ELEOS RESOURCES LTD specializes in providing a wide range of services in the construction and agriculture sectors. With a focus on quality, innovation, and customer satisfaction, we have established ourselves as a leading provider in the industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logolee.png" />
      </Head>

      <div className="w-full flex flex-col bg-white h-full min-h-screen">
        <Navbar />
        <MobileNav />

        <Hero />
        <Services />
        <WhyChoose />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
