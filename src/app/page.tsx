import { MapPin } from 'lucide-react'

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
					<MapPin size={16} /> {info.location}
				</span>
			</div>
		</div>
	)
}
