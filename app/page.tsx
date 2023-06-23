'use client';
import Head from 'next/head';
import Link from 'next/link';
import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
import {
	containerClasses,
	fancyLinkClasses,
	linkClasses,
	sectionBodyClasses
} from 'components/styles';
import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Home() {
	return (
		<div>
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
							A
						</p>
						<p>
							B
						</p>
						<p>
							C
						</p>
						<p>
							D
						</p>
					</div>
				</div>

				<div className={containerClasses} id="school">
					<SectionTitle big accentText="02">
						School
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I am currently studying software engineering at Queensland University of Technology.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Technical Grad Classes:</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>EGB103</li>
							<li>EGB120 </li>
						</ul>
					</div>
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="03">
						Work Experience
					</SectionTitle>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Software Engineering:</h2>
						<p>
							To view my full software engineering work experience, please visit{' '}
							<a href="https://www.linkedin.com/in/nathan-wang-b73966235/" className={fancyLinkClasses}>
								visit my Linkedin page
							</a>
							.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="04">
						Projects
					</SectionTitle>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} Nathan Wang.
						<br />
						This site is built with NextJs and TailWind Css. View the source code on{' '}
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
