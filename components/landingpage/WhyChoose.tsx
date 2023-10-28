/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Expert Team",
    description:
      " Our team comprises skilled architects, engineers, craftsmen, and technicians dedicated to delivering exceptional results.",
    icon: GlobeAltIcon,
  },
  {
    name: "Quality Assurance",
    description:
      "We adhere to rigorous quality control measures, ensuring that every project and product meets the highest standards",
    icon: ScaleIcon,
  },
  {
    name: "Innovation",
    description:
      "We stay updated with the latest trends and technologies, integrating innovation into our designs and services.",
    icon: LightningBoltIcon,
  },
  {
    name: "Timely Delivery",
    description:
      "We understand the importance of deadlines. Our efficient project management ensures timely completion of projects",
    icon: LightningBoltIcon,
  },
  {
    name: "Customer-Centric Approach",
    description:
      "Client satisfaction is our priority. We actively engage with clients, understanding their requirements and exceeding their expectations",
    icon: LightningBoltIcon,
  },
];

export default function WhyChoose() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize mb-12 text-center">
          Why Choose Us
        </p>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
