import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from "next/image"
import left from "../../assets/png/photo.jpeg";

import { ArrowRight } from "../../assets/svg";
const About = () => {
  return (
    <div className="w-full flex flex-col mt-20 pb-10" id="about">
      <ContainerLayout>
        <div className="w-full flex flex-col lg:space-x-8 lg:flex-row  lg:justify-between">
          <div className="w-full lg:w-3/12">
            <Image src={left} alt="  Ayodele Babatunde Photo" />
          </div>
          <div className="w-full lg:w-8/12 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">About the CEO</h1>
            <p className="mt-4 text-sm lg:text-lg tracking-wide text-gray-500">
              Ayodele Babatunde is the CEO and Founder of 2514 KB Eleos, a
              company focused on revolutionizing the construction industry. With
              a degree in Agricultural Engineering from the Federal University
              of Technology, Akure (FUTA), he applies his engineering knowledge
              to various construction projects. Ayodele specializes in Farm
              House Constructions, Farm Machinery Constructions and Fabrication,
              and Cold Room Constructions. He is also passionate about
              Residential Constructions, aiming to create functional and
              aesthetically pleasing living spaces. His vision for 2514 KB Eleos
              is to be a leading force in the construction industry, known for
              innovative solutions and quality craftsmanship. Ayodele's mission
              is to contribute significantly to both the agricultural and
              residential landscape, blending technology, sustainability, and
              creativity in his projects. With a dedicated team, Ayodele leads
              2514 KB Eleos in transforming spaces and shaping the future of
              construction.
            </p>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default About
