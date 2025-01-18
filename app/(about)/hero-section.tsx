"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "~/components/ui/border-beam";
import TextShimmer from "~/components/ui/text-shimmer";
import { Button } from "~/components/ui/button";
import React from "react";
import Link from "next/link";

export default function HeroSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const [os, setOS] = React.useState("Unknown");
	const [downloadLink, setDownloadLink] = React.useState("");

	React.useEffect(() => {
		const userAgent = navigator.userAgent;
		if (userAgent.includes("Win")) setOS("Windows");
		else if (userAgent.includes("Mac")) setOS("MacOS");
		else if (userAgent.includes("Linux")) setOS("Linux");
		else setOS("Unknown");

		if (userAgent.includes("Win")) setDownloadLink("/api/download/windows");
		else if (userAgent.includes("Mac"))
			setDownloadLink("/api/download/macos");
		else if (userAgent.includes("Linux"))
			setDownloadLink("/api/download/linux");
		else
			setDownloadLink(
				"https://web.crabnebula.cloud/campsite-chat/campsite/releases"
			);
	}, []);

	return (
		<section
			id="hero"
			className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
		>
			<div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border dark:border-white/5 bg-black/5 dark:bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 dark:text-black">
				<TextShimmer className="inline-flex items-center justify-center">
					<span>Alpha 0.0.1 is out!</span>{" "}
					<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
				</TextShimmer>
			</div>
			<h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
				It's time to cut the cord.
			</h1>
			<p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
				Campsite is a new communication platform built from the ground
				up with
				<br className="hidden md:block" /> Rust and TypeScript to bring
				you a secure, fast, and sleek chat app.
			</p>
			<Link href={downloadLink} passHref target="_blank">
				<Button className="animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
					<span>
						Download {os === "Unknown" ? "now" : `for ${os}`}
					</span>
					<ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
				</Button>
			</Link>
			<div
				ref={ref}
				className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
			>
				<div
					className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
						inView ? "before:animate-image-glow" : ""
					}`}
				>
					<BorderBeam
						size={200}
						duration={12}
						delay={11}
						colorFrom="var(--color-one)"
						colorTo="var(--color-two)"
					/>

					<img
						src="/dark-hero.png"
						alt="Hero Image"
						className="relative hidden size-full rounded-[inherit] border object-contain dark:block"
					/>
					<img
						src="/light-hero.png"
						alt="Hero Image"
						className="relative block size-full rounded-[inherit]  border object-contain dark:hidden"
					/>
				</div>
			</div>
		</section>
	);
}
