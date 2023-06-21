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
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Home() {
	return (
		<div>
			<main className="bg-slate-950">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
							<svg
								className="absolute top-0 bottom-1/4 right-[-10rem] m-auto opacity-75 h-full"
								viewBox="0 0 1030 692"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
							>
								<g clipPath="url(#clip0_1_2)">
									<g filter="url(#filter0_f_1_2)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M565.961 140.952C591.238 143.377 611.103 153.895 626.589 165.972C639.812 176.285 642.38 188.967 644.079 201.878C645.998 216.455 649.43 231.277 636.841 243.855C620.328 260.354 598.271 278.626 565.961 279.929C532.882 281.263 508.699 263.552 484.725 249.988C459.901 235.943 428.597 222.207 428.01 201.878C427.417 181.389 454.158 164.342 481.895 152.092C505.825 141.523 536.494 138.125 565.961 140.952Z"
											fill="#0369A1"
										/>
									</g>
									<g filter="url(#filter1_f_1_2)">
										<path
											d="M853.75 241.796L625.224 144.393C620.241 142.269 604.579 135.671 597.46 144.393C591.764 151.371 604.104 158.931 610.986 161.839C685.975 196.406 837.376 265.929 843.071 267.479C850.191 269.418 863.717 271.356 871.548 260.695C877.813 252.166 862.293 244.542 853.75 241.796Z"
											fill="#D946EF"
										/>
									</g>
									<g filter="url(#filter2_f_1_2)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M749.539 295.201C773.46 300.354 779.762 334.033 796.795 353.562C813.441 372.648 843.56 380.086 846.663 406.556C849.874 433.948 829.553 457.29 811.099 475.593C793.917 492.635 772.431 501.247 749.539 502.887C724.726 504.664 694.662 507.18 679.579 485.013C664.844 463.357 683.954 433.797 683.994 406.556C684.034 379.411 666.476 351.015 679.811 328.36C694.269 303.796 723.766 289.649 749.539 295.201Z"
											fill="#1D4ED8"
											fillOpacity="0.75"
										/>
									</g>
									<g filter="url(#filter3_f_1_2)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M599.838 240.664C622.091 242.884 644.355 240.073 663.377 252.275C688.638 268.48 718.614 287.533 720.847 318.29C723.131 349.753 699.488 378.338 673.742 395.073C652.025 409.189 625.453 397.264 599.838 396.946C574.805 396.635 544.029 412.956 527.68 393.259C511.276 373.497 535.372 344.372 534.551 318.29C533.669 290.249 505.033 259.378 522.801 238.252C540.374 217.357 573.253 238.012 599.838 240.664Z"
											fill="#6D28D9"
											fillOpacity="0.4"
										/>
									</g>
								</g>
								<defs>
									<filter
										id="filter0_f_1_2"
										x="228"
										y="-60"
										width="618"
										height="540"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_2" />
									</filter>
									<filter
										id="filter1_f_1_2"
										x="496"
										y="40"
										width="477"
										height="329"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_2" />
									</filter>
									<filter
										id="filter2_f_1_2"
										x="554"
										y="174"
										width="413"
										height="450"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_2" />
									</filter>
									<filter
										id="filter3_f_1_2"
										x="397"
										y="109"
										width="444"
										height="414"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_2" />
									</filter>
									<clipPath id="clip0_1_2">
										<rect width="1030" height="692" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>

						<SectionTitle big accentText="Hi there! I'm">
							Nathan Wang
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}>
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
							Studying software engineering at QUT.
						</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Technical Grad Classes:</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>6.521 Advanced Algorithms</li>
							<li>6.390 Computer Vision</li>
						</ul>
						<div className="h-4"></div>
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Technical Undergrad Classes:
						</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>18.600 Probability and Random Variables</li>
							<li>18.650 Fundamentals of Statistics</li>
							<li>6.390 Introduction to Machine Learning</li>
							<li>6.190 Introduction to Low-level Programming in C and Assembly</li>
							<li>6.191 Computation Structures</li>
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
					<div className={sectionBodyClasses}>
						<p>I'm always working on something new. Below are a few of my favorite projects!</p>
					</div>
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
