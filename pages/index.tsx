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
        <Gallery />
        <Faq />
        <Contact />

        <Footer />
      </div>
    </>
  );
}
