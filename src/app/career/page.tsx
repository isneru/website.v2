export default function Career() {
	return (
		<>
			<p className='leading-loose tracking-widest font-black border-b border-b-white/5'>
				CAREER
			</p>
			<div className='p-4 space-y-8 font-mono'>
				<div className='space-y-2'>
					<strong className='uppercase'>learned in college</strong>
					<ul className='px-2'>
						<CustomLI title='backend' label='java, c++, c, asm, arduino' />
						<CustomLI title='dbs' label='sql (dimensional/relational models)' />
						<CustomLI title='frontend' label='javascript, react (native)' />
						<CustomLI title='design pattern' label='mvvm, mvc and others' />
					</ul>
				</div>
				<div className='space-y-2'>
					<strong className='uppercase'>self-taught</strong>
					<ul className='px-2'>
						<CustomLI title='webdev' label='html, css, javascript' />
						<CustomLI
							title='js frameworks'
							label='react, next, vue, nuxt, svelte(kit), astro'
						/>
						<CustomLI title='tools' label='prisma orm, supabase' />
					</ul>
				</div>
			</div>
		</>
	)
}

type Props = {
	title: string
	label: string
}

const CustomLI = ({ title, label }: Props) => {
	return (
		<li className='list-[square] list-inside group uppercase'>
			<span className='font-bold'>{title}:</span>{' '}
			<span className='text-white/50 group-hover:underline decoration-white/20'>
				{label}
			</span>
		</li>
	)
}
