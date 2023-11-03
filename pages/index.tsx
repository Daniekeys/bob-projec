import Head from "next/head";
import Navbar from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";
import Hero from "../components/landingpage/Hero";
import Footer from "../components/landingpage/Footer";
import Services from "../components/landingpage/Services";
import WhyChoose from "../components/landingpage/WhyChoose";
import Contact from "../components/landingpage/Contact";
import Gallery from "../components/landingpage/Gallery";
import Faq from "../components/landingpage/Faq";
import About from "../components/landingpage/About";




export default function Home() {
  return (
    <>
      <Head>
        <title>2514 KB ELEOS</title>
        <meta
          name="description"
          content="Ayodele Babatunde is the CEO and Founder of 2514 KB Eleos, a company focused on revolutionizing the construction industry. With a degree in Agricultural Engineering, he applies his engineering knowledge to various construction projects."
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

        <Gallery />
        <Faq />
        <About />
        <Contact />

        <Footer />
      </div>
    </>
  );
}
