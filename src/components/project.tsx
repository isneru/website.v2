type Props = {
	title: string
	label: string
}

export const Project = ({ title, label }: Props) => {
	return (
		<div className='font-mono group uppercase'>
			<strong>{title}:</strong>{' '}
			<span className='text-white/50 group-hover:underline decoration-white/20'>
				{label}
			</span>
		</div>
	)
}
