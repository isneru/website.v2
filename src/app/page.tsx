import { GithubPixelatedIcon } from '@/components/icons/github'
import { PinPixelatedIcon } from '@/components/icons/pin'
import { Tooltip } from '@/components/tooltip-card'
import {
	BookOpenTextIcon,
	GithubIcon,
	LinkedinIcon,
	MapPin
} from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
	const username = 'isneru'
	const res = await fetch(`https://api.github.com/users/${username}`, {
		next: { revalidate: 60 }
	})
	const info = await res.json()

	return (
		<div className='flex gap-4'>
			<img
				width={120}
				height={120}
				draggable={false}
				className='select-none'
				src={info.avatar_url}
				alt={`${username}'s profile picture`}
			/>
			<div className='font-mono flex flex-col justify-between'>
				<div className='space-y-1'>
					<h1 className='font-black text-3xl uppercase'>{info.name}</h1>
					<p className='text-white/50 select-none'>{info.bio}</p>
				</div>
				<span className='flex items-center gap-1 text-white/50 text-sm'>
					<PinPixelatedIcon width={16} height={16} />
					{info.location}
				</span>
			</div>
			<div className='flex gap-4 flex-col ml-auto'>
				<Link
					href='https://github.com/isneru'
					className='text-white/50 hover:text-white transition-colors'
					target='_blank'>
					<GithubPixelatedIcon width={20} height={20} />
				</Link>
			</div>
		</div>
	)
}
