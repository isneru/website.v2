export const Rightbar = () => {
	return (
		<aside className='[grid-area:right] border-l border-l-white/10 w-full h-full flex flex-col p-4 font-mono'>
			<div className='flex items-center justify-center mt-auto uppercase font-bold text-sm gap-2'>
				available for hire
				<span className='relative flex size-2'>
					<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400' />
					<span className='relative inline-flex size-2 rounded-full bg-emerald-500' />
				</span>
			</div>
		</aside>
	)
}
