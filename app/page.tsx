import Image from 'next/image';
import { ECProjectBox } from './components/EducationCard';
import Navbar from './components/header';
import { IndBox } from './components/IndependentCard';
import { SkillBox } from './components/SkillCard';
import { UCProjectBox } from './components/UnclickableCard';

// color palette: #fbceb1, #b1ddc9, #6cd0d0, #ffcbdb

export default function Home() {

  return (
    <div
      className={`grid grid-rows-[auto_1fr] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <section id="home" className="mt-0">
          <div className="inline-block max-w-full px-2 py-2 rounded bg-gradient-to-r from-[#b1ddc9] to-[#6cd0d0]">
            <h1 className="font-bold text-5xl px-2 py-2 dark:">Aarushi Ammavajjala.</h1>
          </div>
          <h1 className="font-bold text-3xl py-3"> Developer </h1>
          <h1 className="text-xl"> Studying Computer Science @ South Forsyth High School </h1>
          <h1 className="text-xl"> Contact: aaru7811 [at] gmail [dot] com </h1>
          <a
            href="https://www.linkedin.com/in/aarushi-ammavajjala-207b49238/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Icon"
              width={70}
              height={70}
              className="rounded hover:bg-[#6cd0d0] transition-opacity-80 duration-200"
            />
          </a>
        </section>
        <h1 className="font-bold text-4xl py-3 underline"> Education & Skills </h1>
        <section id="education" className="flex flex-col gap-6 sm:gap-8">
          <div className="w-full sm:w-1/3">
            <ECProjectBox
              title="South Forsyth High School"
              org="NMSQT Semifinalist, AP Scholar with Distinction"
              date="AUG 2021 - MAY 2025"  
              color="#fbceb1"
            />
          </div>

          <div className="w-full sm:w-2/3 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-x-28">
              <SkillBox title="Python" color="#fbceb1" />
              <SkillBox title="Java" color="#b1ddc9" />
              <SkillBox title="Swift" color="#6cd0d0" />
              <SkillBox title="SQL" color="#ffcbdb" />
              <SkillBox title="Computer Vision" color="#fbceb1" />
              <SkillBox title="NLP" color="#b1ddc9" />
              <SkillBox title="R" color="#6cd0d0" />
              <SkillBox title="JavaScript" color="#ffcbdb" />
            </div>
          </div>
        </section>
        <section id="experience">
          <h1 className="font-bold text-4xl py-3 underline"> Recent Experiences </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 px-4">
              <UCProjectBox
                title="AI Development Intern"
                org="Georgia Institute of Technology"
                date="JUNE 2025"
                desc="Details coming soon."
                color="#fbceb1"
              />
              <UCProjectBox
                title="AI Development Intern"
                org="United Nations"
                date="JAN 2025 - PRESENT"
                desc="Coordinating AI development across 140+ youth-led international NGOs."
                color="#b1ddc9"
              />
                <UCProjectBox
                title="AI Research Intern"
                org="Stanford Department of Anesthesiology"
                date="JAN 2025 - PRESENT"
                desc="Predicting hypotension from arterial blood waveforms using deep learning."
                color="#6cd0d0"
              />
         
            <UCProjectBox
              title="Development Intern"
              org="Oracle"
              date="AUG 2024 - PRESENT"
              desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions."
              color="#ffcbdb"
            />

              <UCProjectBox
                title="AI Research Intern"
                org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
                date="JUNE - JULY 2024"
                desc="1 of 20 selected nationwide. Developed high-accuracy pulmonary diagnostic system.  RadGraph for unsupervised radiology report classifier; ResNet ultrasound analysis model."
                color="#fbceb1"
              />

            <UCProjectBox
              title="Development Intern"
              org="Microsoft"
              date="JULY 2023 - APR 2024"
              desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a mobile application and NFC wearable that streamlines communication of medical information between crisis victims and first responders. Presented to Microsoft/AT&T investors."
              color="#b1ddc9"
            />
           <UCProjectBox
                title="AI Research Intern"
                org="TSI + Cornell University"
                date="JUNE - AUG 2023"
                desc="Developed a graph neural network for binary state neuroimaging recognition. Accepted to TSI (~10% of 850), matched at Cornell University. Published paper and spoke at Talaria International Conference."
                color="#6cd0d0"
              />
          
            <UCProjectBox
              title="AI Research Intern"
              org="Midwestern University"
              date="AUG 2023 - APR 2024"
              desc="Developed a two-prong neural network to automate gastric point-of-care ultrasound. Segments antrum, classifies content, identifies diameters, calculates operable volume, and outputs aspiration risk."
              color="#ffcbdb"
            />
          </div>
        </section>
        <section id="projects">
          <h1 className="font-bold text-4xl py-3 underline"> Recent Projects </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 mx-auto justify-items-center">
            <a
              href="https://www.youtube.com/watch?v=_bVhGnBFY90"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="MelaninMed"
                org="A deep learning powered AI mobile application for racially equitable skin cancer detection."
                color="#fbceb1"
              />
            </a>
            <a
              href="https://github.com/aaru4/POCUS-Net/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="POCUS-Net"
                org="A highly-accurate transformer-based classification model to reduce anesthesia-induced aspiration morbidity."
                color="#b1ddc9"
              />
            </a>
            <a
              href="https://aaru7811.wixsite.com/climicideml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <IndBox
                title="ClimiCide"
                org="A gradient boosting regressor, trained on a custom dataset, to predict increases in climate-change-induced suicides."
                color="#6cd0d0"
              />
            </a>

          </div>
        </section>
        <h1 className="text-l"> Copyright 2025 Aarushi Ammavajjala. All rights reserved. </h1>
      </main>
    </div>
  );
}
