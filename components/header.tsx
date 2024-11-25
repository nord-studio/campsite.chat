'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { AlignJustify, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'
import Icons from './icons'
import { Button } from './ui/button'
import { ThemeToggle } from './theme/toggle'

const menuItem = [
	{
		id: 1,
		label: 'About',
		href: '/',
	},
	{
		id: 2,
		label: 'Team',
		href: '/team',
	},
	{
		id: 3,
		label: 'Roadmap',
		href: '/roadmap',
	},
	{
		id: 4,
		label: 'GitHub',
		href: '/github',
	},
]

export function Header() {
	const mobilenavbarVariant = {
		initial: {
			opacity: 0,
			scale: 1,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.2,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				delay: 0.2,
				ease: 'easeOut',
			},
		},
	}

	const mobileLinkVar = {
		initial: {
			y: '-20px',
			opacity: 0,
		},
		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
	}

	const containerVariants = {
		open: {
			transition: {
				staggerChildren: 0.06,
			},
		},
	}

	const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

	useEffect(() => {
		const html = document.querySelector('html')
		if (html)
			html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen)
	}, [hamburgerMenuIsOpen])

	useEffect(() => {
		const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)
		window.addEventListener('orientationchange', closeHamburgerNavigation)
		window.addEventListener('resize', closeHamburgerNavigation)

		return () => {
			window.removeEventListener('orientationchange', closeHamburgerNavigation)
			window.removeEventListener('resize', closeHamburgerNavigation)
		}
	}, [setHamburgerMenuIsOpen])

	return (
		<>
			<header className="animate-fade-in fixed left-0 top-0 z-50 w-full -translate-y-4 border-b opacity-0 backdrop-blur-md [--animation-delay:600ms]">
				<div className="container flex h-14 items-center justify-between">
					<Link className="text-md flex items-center" href="/">
						<Icons.Campsite className='w-8 h-8' />
					</Link>
					<div className='ml-auto items-center gap-2 flex-row hidden md:flex'>
						<Link href="/">
							<Button variant="link">
								About
							</Button>
						</Link>
						<Link href="/team">
							<Button variant="link">
								Team
							</Button>
						</Link>
						<Link href="/roadmap">
							<Button variant="link">
								Roadmap
							</Button>
						</Link>
					</div>

					<div className="ml-auto hidden md:flex h-full items-center">
						<ThemeToggle />
					</div>
					<button
						className="ml-6 md:hidden"
						onClick={() => setHamburgerMenuIsOpen(open => !open)}
					>
						<span className="sr-only">Toggle menu</span>
						{hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
					</button>
				</div>
			</header>
			<AnimatePresence>
				<motion.nav
					initial="initial"
					exit="exit"
					variants={mobilenavbarVariant}
					animate={hamburgerMenuIsOpen ? 'animate' : 'exit'}
					className={cn(
						`bg-background/70 fixed left-0 top-0 z-50 h-screen w-full overflow-auto backdrop-blur-md `,
						{
							'pointer-events-none': !hamburgerMenuIsOpen,
						},
					)}
				>
					<div className="container flex h-14 items-center justify-between">
						<Link className="text-md flex items-center" href="/" onClick={() => setHamburgerMenuIsOpen(open => !open)}>
							<Icons.Campsite className='w-8 h-8' />
						</Link>

						<button
							className="ml-6 md:hidden"
							onClick={() => setHamburgerMenuIsOpen(open => !open)}
						>
							<span className="sr-only">Toggle menu</span>
							{hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
						</button>
					</div>
					<motion.ul
						className="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
						variants={containerVariants}
						initial="initial"
						animate={hamburgerMenuIsOpen ? 'open' : 'exit'}
					>
						{menuItem.map(item => (
							<motion.li
								variants={mobileLinkVar}
								key={item.id}
								className="border-grey-dark border-b py-0.5 pl-6 md:border-none"
							>
								<Link
									className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${hamburgerMenuIsOpen ? '[&_a]:translate-y-0' : ''}`}
									href={item.href}
									onClick={() => setHamburgerMenuIsOpen(open => !open)}
								>
									{item.label}
								</Link>
							</motion.li>
						))}
					</motion.ul>
				</motion.nav>
			</AnimatePresence>
		</>
	)
}