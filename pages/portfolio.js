// PagePortfolio.js
import { siteTitle, sectionTitle } from "./_app";
import Head from "next/head";
import Layout from "../components/layout";
import Section1 from "../components/Section1";
import imageAnakmarketing from "../public/images/anakmarketing.png"
import imageDemandgenlab from "../public/images/demandgenlab.png"

export default function PagePortfolio() {
  const sectionData = [
    {
      img: imageAnakmarketing,
      title: "anakmarketing.com",
      description: "Blog site focuses on digital marketing and content marketing strategies.",
      url: "https://anakmarketing.com"
    },
    {
      img: imageDemandgenlab,
      title: "DemandGenLab.com",
      description: "Boost your leads with demand generation tactics.",
      url: "https://demandgenlab.com"
    }
    // Add more sections as needed
  ];

  return (
    <Layout className="mb-8">
      <Head>
        <title>{siteTitle}Portfolio</title>
      </Head>
      <section className="py-8 px-3">
      {sectionTitle("What i've made")}
        <div className="md:flex-row space-y-8 md:space-y-0 md:space-x-3 p-3 justify-center md:justify-start items-center md:items-stretch">
          {sectionData.map((section, index) => (
            <Section1
              key={index}
              img={section.img}
              title={section.title}
              description={section.description}
              url={section.url}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
