import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

// List of projects that I have completed
export const ProjectsList = () => (
	<CardGrid>
		<Card
			title="Virtual Sustainability Tour of Brisbane"
			link="https://github.com/QUT-CAB302-Software-Development/virtual-sustainability-tour"
			tags={['Java', 'Spring', 'React', 'NodeJS', 'ThreeJS']}
		>
			Virtual 3D interactive and tour of Brisbane with backend sustainability algorithm.
		</Card>
		<Card
			title="Code Network Club Website"
			link="https://www.codenetwork.co/"
			tags={['Vite', 'React', 'Netlify']}
		>
			Live code network website deployed using Netlify
		</Card>
		<Card
			title="Portfolio Website"
			link="https://github.com/NathanHam16/portfolio-nathan"
			tags={['React', 'Next', 'Tailwind', 'Vercel']}
		>
			Source code for my portfolio website using Vercel's continuous deployment.
		</Card>
		<Card
			title="Terminal OOP Auction Market"
			link="https://github.com/NathanHam16/C-Sharp-Auction-House"
			tags={['C#', 'OOP', '.NET']}
		>
			Auction market with login, registration, bid, sell, purchase, and search functionality.
		</Card>
		<Card
			title="Pygame Sudoku Game"
			link="https://github.com/NathanHam16/Python-Sudoku-Game"
			tags={['Python']}
		>
			My first project: simple PyGame sudoku game with 3 difficulties and multiple UI menus.
		</Card>
	</CardGrid>
);
