// api/projects.ts
// API/database logic for fetching projects from MongoDB

// Dummy data for testing
const dummyProjects = [
	{
		_id: '1',
		title: 'E-Commerce Platform',
		description:
			'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment integration.',
		liveDemoLink: 'https://example.com/demo1',
		sourceCodeLink: 'https://github.com/example/repo1',
		image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
	},
	{
		_id: '2',
		title: 'Task Management App',
		description:
			'A real-time task management application built with React and Firebase. Features include drag-and-drop functionality and team collaboration.',
		liveDemoLink: 'https://example.com/demo2',
		sourceCodeLink: 'https://github.com/example/repo2',
		image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
	},
	{
		_id: '3',
		title: 'Portfolio Website',
		description:
			'A modern portfolio website built with React and Tailwind CSS. Features responsive design and smooth animations.',
		liveDemoLink: 'https://example.com/demo3',
		sourceCodeLink: 'https://github.com/example/repo3',
		image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
	},
	{
		_id: '4',
		title: 'Blog Platform',
		description:
			'A blogging platform with markdown support, user authentication, and a modern editor.',
		liveDemoLink: 'https://example.com/demo4',
		sourceCodeLink: 'https://github.com/example/repo4',
		image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
	},
	{
		_id: '5',
		title: 'Weather Dashboard',
		description:
			'A weather dashboard app using OpenWeatherMap API, built with React and Chart.js.',
		liveDemoLink: 'https://example.com/demo5',
		sourceCodeLink: 'https://github.com/example/repo5',
		image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
	},
];

export async function getLatestProjects(limit = 4) {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1200));
	return dummyProjects.slice(0, limit);
}

export async function getAllProjects() {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1200));
	return dummyProjects;
}
