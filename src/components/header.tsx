'use client'
import React, { useState, useEffect, useMemo } from 'react'

export const Header = () => {
	const [text, setText] = useState('')
	const [spotifyData, setSpotifyData] = useState<{
		isPlaying: boolean
		title?: string
		artist?: string
	} | null>(null)

	const [msgIndex, setMsgIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [speed, setSpeed] = useState(100)

	useEffect(() => {
		const fetchNowPlaying = async () => {
			try {
				const res = await fetch(`/api/now-playing?t=${Date.now()}`)

				if (!res.ok) return

				const data = await res.json()
				setSpotifyData(data)
			} catch (error) {
				console.error('Spotify fetch error', error)
			}
		}

		fetchNowPlaying()

		const interval = setInterval(fetchNowPlaying, 20000)

		return () => clearInterval(interval)
	}, [])

	const messages = useMemo(() => {
		const base = ['LOCATION: PORTO, PT', 'AVAILABLE FOR WORK']

		if (spotifyData?.isPlaying && spotifyData.title) {
			base.push(`LISTENING TO: ${spotifyData.artist} - ${spotifyData.title}`)
		} else {
			base.push('SPOTIFY: OFFLINE')
		}

		return base
	}, [spotifyData])

	useEffect(() => {
		const handleTyping = () => {
			const safeIndex = msgIndex % messages.length
			const currentMsg = messages[safeIndex]

			if (isDeleting) {
				setText(currentMsg.substring(0, text.length - 1))
				setSpeed(30)
			} else {
				setText(currentMsg.substring(0, text.length + 1))
				setSpeed(100)
			}

			if (!isDeleting && text === currentMsg) {
				setTimeout(() => setIsDeleting(true), 1500)
			} else if (isDeleting && text === '') {
				setIsDeleting(false)
				setMsgIndex(prev => (prev + 1) % messages.length)
			}
		}

		const timer = setTimeout(handleTyping, speed)
		return () => clearTimeout(timer)
	}, [text, isDeleting, msgIndex, speed, messages])

	return (
		<header className='[grid-area:header] w-full h-full bg-black border-b border-white/10 flex p-4 font-mono text-xs md:text-sm uppercase overflow-hidden'>
			<div className='text-white w-full flex whitespace-nowrap'>
				<span className='text-sky-600 font-bold mr-2 shrink-0'>
					root@portfolio:~$
				</span>

				<span className='truncate'>{text}</span>

				<span className='animate-pulse bg-white w-2 h-4 ml-1 block shrink-0'></span>
			</div>
		</header>
	)
}
