/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question:
      "What types of construction services does 2514 KB Eleos Resources Ltd provide?",
    answer:
      "2514 KB Eleos Resources Ltd specializes in a wide range of construction services, including but not limited to residential, commercial, industrial, and infrastructure projects. Our expertise encompasses everything from building new structures to renovation and restoration..",
  },
  {
    question:
      "Can you tell me more about your offerings in the agriculture sector?",
    answer:
      "In the agriculture sector, we offer comprehensive services covering various aspects such as farm planning, land development, irrigation systems, crop management, and more. Our team leverages cutting-edge techniques and technology to optimize agricultural processes and enhance yields..",
  },
  {
    question:
      "What sets 2514 KB Eleos Resources Ltd apart from other providers in the industry?",
    answer:
      "We distinguish ourselves through our unwavering commitment to quality, a culture of innovation, and a relentless focus on customer satisfaction. Our track record of successful projects and a team of experienced professionals ensure that we deliver results that surpass expectations.",
  },
  {
    question: "How do you ensure the safety of your construction sites?",
    answer:
      "Safety is our top priority. We strictly adhere to industry-standard safety protocols and guidelines. Our team undergoes rigorous training, and we implement robust safety measures on all our sites. Additionally, we conduct regular safety audits and inspections to maintain a secure working environment.",
  },
  {
    question:
      "How can I get in touch with 2514 KB Eleos Resources Ltd for potential projects or collaborations?",
    answer:
      "We'd be delighted to discuss potential projects or collaborations. You can reach out to us through our 'Contact Us' page on our website. Alternatively, you can email us at Info@2514kbeleos.com or give us a call at +2348064907028. Our dedicated team will promptly respond to your inquiries and assist you in any way we can.",
  },

  // More questions...
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
