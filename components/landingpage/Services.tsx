/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import farm from "../../assets/svg/Farm house copy.svg";
import cold from "../../assets/svg/COLD ROOM.svg";
import mat from "../../assets/svg/Farm equipment.svg";
import equip from "../../assets/svg/Innovation.svg";
import hbuild from "../../assets/svg/Residential buidling.svg"
const features = [
  {
    name: "Farmhouse Construction",
    description:
      "We specialize in designing and constructing farmhouses tailored to our clients' unique needs. Our team of experienced architects and builders ensures that each farmhouse combines aesthetic appeal with functional efficiency",
    icon: GlobeAltIcon,
    image:farm
  },
  {
    name: "Farm Equipment and Machinery Construction and Fabrication",
    description:
      "We design, fabricate, and supply a variety of farm equipment and machinery, customized to enhance agricultural operations. Our products are known for their durability, efficiency, and cutting-edge technology.",
    icon: ScaleIcon,
    image:equip,
  },
  {
    name: "Cold Room Construction",
    description:
      "We offer state-of-the-art cold room construction services, ensuring precise temperature control for storage of perishable goods. Our cold rooms are designed to meet industry standards and are suitable for various applications, including agriculture and food processing.",
    icon: LightningBoltIcon,
    image:cold
  },
  {
    name: "Residential Construction",
    description:
      "In addition to farm-related construction, we are experienced in building high-quality residential properties. Our residential construction services cover everything from architectural design to the final touches, guaranteeing homes that are both functional and aesthetically pleasing.",
    icon: AnnotationIcon,
    Image: hbuild
    
  },
  {
    name: "Building Materials Supply",
    description:
      "We are your one-stop solution for high-quality building materials. From basic construction materials to specialized items, we supply a wide range of products sourced from reputable manufacturers. Our commitment is to provide materials that meet or exceed industry standards",
    icon: AnnotationIcon,
    image:mat
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-white" id="service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#38b000] font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize">
            Explore our top services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are a leading provider in the construction and agriculture
            sectors, known for our expertise in offering a diverse range of
            high-quality services, driven by a commitment to innovation and
            customer contentment.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#38b000] text-white">
                    <Image className="h-6 w-6" aria-hidden="true" src={feature.image} alt="icon" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
