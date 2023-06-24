'use client';
import { SectionTitle } from 'components/SectionTitle';
import { ProjectsList } from 'components/Index/ProjectsList';
import Head from 'next/head';
import {
	containerClasses,
	fancyLinkClasses,
	linkClasses,
	sectionBodyClasses
} from 'components/styles';
import React, { useRef, useEffect } from 'react';


export default function Home() {
	return (
		<div>
			 <Head>
				<meta property="og:image" content="og/preview.png" />
			</Head>
			<main className="bg-slate-950" style={{ backgroundImage: 'url(/background2.jpg)' }}>
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<SectionTitle big accentText="Hello! My name is ">
							Nathan Wang
						</SectionTitle>
						<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
							<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
								Co-Founder, Software Developer, Sessional Academic
							</h2>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
						<div className="font-mono uppercase text-slate-400 text-sm sm:text-base">
							<a className={fancyLinkClasses} href="mailto:nathan123wang@gmail.com" target="_blank">
								Email
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://github.com/NathanHam16"
								target="_blank"
							>
								Github
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://www.linkedin.com/in/nathan-wang-b73966235/"
								target="_blank"
							>
								Linkedin
							</a>
						</div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I'm a software engineering student striving to change the world one step at a time. Through continuous improvement of my programming skills and 
							exploration of emerging technologies, I aspire to develop innovative software that resonates with people and enriches their lives.
						</p>
						<p>
							I primarily use Python, Javascript, & Java. Outside of programmng, I enjoy reading and exercising. My favourite authors include James Clear, Dale Carnegie, and Alex Hormozi.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="02">
						Work Experience
					</SectionTitle>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Co-Founder, 99 Plus Education</h2>
						<p>
							To view my full software engineering work experience, please visit{' '}
							<a href="https://www.linkedin.com/in/nathan-wang-b73966235/" className={fancyLinkClasses} target="_blank">
								visit my Linkedin page
							</a>
							.
						</p>

						<div className="h-8 lg:h-12"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Sessional Academic, Queensland University of Technology</h2>
						<p>
							I tutor Python (EGB103) at the Queensland University of Technology. EGB103 covers Python fundamentals and data 
							processing and visualisation with pandas.
						</p>

						<div className="h-8 lg:h-12"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Frontend Developer, Code Network</h2>
						<p>
							Collaborated in a team of 5 to develop and deploy Code Network website using React, Vite and Netlify.
							Continuous Integration/Deployment pipeline, with pull requests, code reviews, and Github Actions testing.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="03">
						Projects
					</SectionTitle>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="04">
						Contact
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							Get in touch. My inbox is always open, whether 
							you have a question or just want to say hi, I’ll try my best to get back to you!
						</p>

						<div className="h-1 lg:h-1"></div>

						<a className={fancyLinkClasses} href="mailto:nathan123wang@gmail.com" target="_blank">
							Say hello here!
						</a>{' '}
					</div>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
						<br />
						This site is built with NextJs and TailWind Css by Nathan Wang. View the source code on{' '}
						<a
							className={linkClasses}
							href="https://github.com/NathanHam16/portfolio-nathan"
							target="_blank"
						>
							Github
						</a>
						.
					</div>
				</div>
			</main>
		</div>
	);
}
