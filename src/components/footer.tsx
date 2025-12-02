export const Footer = () => {
	return (
		<footer className='[grid-area:footer] border-t border-t-white/10 w-full h-full font-mono p-4'>
			<div className='flex justify-between items-end text-xs text-white/80 uppercase'>
				<span>© {new Date().getFullYear()} DIOGO NOGUEIRA</span>
				<span>
					SYSTEM: <span className='text-emerald-500'>ONLINE</span>
				</span>
			</div>
		</footer>
	)
}
