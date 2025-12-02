import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { Rightbar } from '@/components/rightbar'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'diogo nogueira',
	description: '$'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className='grid min-h-screen bg-white font-sans dark:bg-black [grid-template-areas:"header_header_header_header_right"_"sidebar_main_main_main_right"_"sidebar_main_main_main_right"_"sidebar_main_main_main_right"_"footer_footer_footer_footer_right"]  auto-rows-fr auto-cols-fr'>
					<Header />
					<Sidebar />
					<main className='[grid-area:main] w-full h-full p-4'>{children}</main>
					<Rightbar />
					<Footer />
				</div>
			</body>
		</html>
	)
}
