import { Project } from '@/components/project'

export default function Projects() {
	const PROJS = [
		{
			title: 'C HTML Templater',
			label:
				'A simple HTTP web server written in C with basic HTML templating support.'
		},
		{
			title: 'Pretty GH Readme',
			label: ' Give your Github profile some personality.'
		},
		{
			title: 'Better Moodle',
			label:
				'No bullsh*t session timeouts, just seamless access to your course materials.'
		}
	]

	return (
		<>
			<p className='leading-loose tracking-widest font-black border-b border-b-white/5'>
				PROJECTS
			</p>
			<div className='space-y-2 p-4'>
				{PROJS.map(proj => (
					<Project key={proj.title} title={proj.title} label={proj.label} />
				))}
			</div>
		</>
	)
}
