'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
	{ label: 'index', url: '/' },
	{ label: 'projects', url: '/projects' },
	{ label: 'career', url: '/career' }
]

export const Sidebar = () => {
	const pathname = usePathname()

	return (
		<aside className='[grid-area:sidebar] border-r border-r-white/10 w-full h-full '>
			<nav className='flex flex-col space-y-4 p-4 text-sm font-mono'>
				<p className='leading-loose tracking-widest font-black'>NAVIGATION</p>
				{LINKS.map(link => (
					<Link
						data-active={link.url === pathname ? 'true' : 'false'}
						key={link.label}
						href={link.url}
						className='text-white/50 hover:text-white border-l-4 border-l-transparent hover:border-l-white pl-2 data-[active=true]:border-l-white data-[active=true]:text-white transition-colors'>
						{link.label}
					</Link>
				))}
			</nav>
		</aside>
	)
}
