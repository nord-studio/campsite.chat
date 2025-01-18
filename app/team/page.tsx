import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import SparklesText from "~/components/ui/sparkles-text";

export default function TeamPage() {
	return (
		<>
			<main className="relative mx-auto my-32 max-w-7xl px-6 text-center md:px-8">
				<h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-5xl md:text-6xl lg:text-7xl dark:from-white dark:to-white/40">
					We believe communication <br /> is the foundation of{" "}
					<SparklesText
						text="everything."
						sparklesCount={5}
						colors={{
							first: "var(--color-one)",
							second: "var(--color-two)",
						}}
						className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
					/>
				</h1>
				<p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
					Everything starts with conversation. Campsite was born from
					discourse about the lack of stable, standerdized
					communication platforms. We aspire to change that.
				</p>
				<div className="animate-fade-up mt-16 opacity-0 [--animation-delay:400ms] [perspective:2000px] flex flex-col gap-6 items-center w-full">
					<h2 className="text-2xl md:text-3xl font-semibold">
						Meet the team
					</h2>
					<div className="flex flex-col justify-start lg:justify-center gap-8 lg:gap-12 lg:items-center flex-wrap max-w-[400px] lg:max-w-full w-full md:flex-row items-start">
						<div className="flex flex-row gap-4 items-center text-start">
							<Image
								src="https://avatars.githubusercontent.com/u/59417077"
								alt="tygrdev"
								width={144}
								height={144}
								className="border border-black/10 dark:border-white/10 rounded-lg"
							/>
							<div className="flex flex-col">
								<h3 className="mb-0 mt-2 text-xl font-bold">
									tygrdev
								</h3>
								<span className="m-0 text-base italic text-neutral-500 dark:text-neutral-400">
									Machine Girl's #1 Fan
								</span>
								<p className="m-0 text-sm">
									Founder, Lead of Design, Engineer
								</p>
								<div className="mt-3 flex flex-row space-x-2">
									<Link href="https://github.com/tygrdotdev">
										<GitHubLogoIcon className="w-6 h-6 cursor-pointer" />
									</Link>
								</div>
							</div>
						</div>

						<div className="flex flex-row gap-4 items-center text-start">
							<Image
								src="https://avatars.githubusercontent.com/u/47715070"
								alt="NyanSpaghetti"
								width={144}
								height={144}
								className="border border-black/10 dark:border-white/10 rounded-lg"
							/>
							<div className="flex flex-col">
								<h3 className="mb-0 mt-2 text-xl font-bold">
									NyanSpaghetti
								</h3>
								<span className="m-0 text-base italic text-neutral-500 dark:text-neutral-400">
									Spaghetti Enthusiast
								</span>
								<p className="m-0 text-sm">
									Lead of Backend, Rust Engineer
								</p>
								<div className="mt-3 flex flex-row space-x-2">
									<Link href="https://github.com/NyanSpaghetti">
										<GitHubLogoIcon className="w-6 h-6 cursor-pointer" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}