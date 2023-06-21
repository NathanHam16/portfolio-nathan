import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
	<CardGrid>
		<Card
			title="A"
			link="https://github.com/NathanHam16/portfolio-nathan"
			tags={['Gatsby', 'React', 'Tailwind', 'Firebase']}
		>
			My portfolio
		</Card>
	</CardGrid>
);
