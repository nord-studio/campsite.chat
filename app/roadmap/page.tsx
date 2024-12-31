import {
	Timeline,
	TimelineContent,
	TimelineDot,
	TimelineHeading,
	TimelineItem,
	TimelineLine,
} from "~/components/ui/timeline"

const preAlphaTimeline = [
	{
		title: "Authentication",
		description:
			"Allow users to register and log in to their Campsite account.",
		done: true,
	},
	{
		title: "User Profiles",
		description:
			"Each user can customise their profile to match their style.",
		done: true,
	},
	{
		title: "Friend Requests",
		description:
			"Allow users to create requests with other users to establish friendships!",
		done: true,
	},
	{
		title: "Direct Messages",
		description:
			"Communicate with your fellow friends one-on-one in a secure manner.",
	},
	{
		title: "Group Chats",
		description:
			"Group up with your friends and hang out in a chat together.",
	},
	{
		title: "Rate Limiting",
		description:
			"Prevent abuse of the API by limiting the number of requests a user can make.",
	},
	{
		title: "Realtime",
		description:
			"Get instant updates on critical data such as DMs, user profiles, friends list, etc.",
	},
];

const alphaTimeline = [
	{
		title: "Attachments",
		description:
			"Finally, you can send cat memes to your friends in DMs and Group Chats.",
	},
	{
		title: "GIFs",
		description: "Send GIFs (not JIFs) to your friends.",
	},
	{
		title: "Notifications",
		description:
			"Get notified when someone messages you, or when your friend requests are accepted.",
	},
	{
		title: "Camps",
		description:
			"A customisable server with groups of channel, which can be used as a place for your friends to hangout, or can be used to host entire communities.",
	},
	{
		title: "Custom Emojis",
		description: "Upload your own custom emojis to use in chats.",
	},
	{
		title: "Mobile Support",
		description: "Start work on the mobile app for Campsite.",
	},
	{
		title: "Tent",
		description:
			"Your own private space to dump your thoughts, files, and more.",
	},
	{
		title: "Invitation Tokens",
		description:
			"Recieve tokens as you use Campsite that can be used to invite your friends to use Campsite!",
	},
];

const privateBetaTimeline = [
	{
		title: "Profile Connections",
		description:
			"Connect your other social media profiles to your Campsite account and share where people can find you.",
	},
	{
		title: "Voice Calling",
		description: "Use your voice to communicate with your friends.",
	},
	{
		title: "Video Calling",
		description:
			"Hook up a webcam and broadcast your face (or cat) to your friends in a call.",
	},
	{
		title: "Screen Sharing",
		description:
			"Share your screen with your friends. Show them your gameplay, help them debug their code, anything!",
	},
	{
		title: "Rich Presence",
		description:
			"Show your friends what you're up to. Playing a game? Watching a movie? They'll know.",
	},
	{
		title: "Bots",
		description:
			"Create and deploy bots to automate tasks in your Campsite server.",
	},
	{
		title: "Campsite Premium",
		description:
			"Get access to early features, unlock customisation options, get a cool badge, and support the development of Campsite.",
	},
];
const betaTimeline = [];
const releaseTimeline = [];

function TimeLineCard({
	title,
	description,
	done = false,
	last = false,
}: {
	title: string;
	description: string;
	done?: boolean;
	last?: boolean;
}) {
	return (
		<TimelineItem status={done ? "done" : "default"}>
			<TimelineHeading>{title}</TimelineHeading>
			<TimelineDot status={done ? "done" : "default"} />
			{last ? null : <TimelineLine done={done} />}
			<TimelineContent>{description}</TimelineContent>
		</TimelineItem>
	);
}

export default function RoadmapPage() {
	return (
		<>
			<main className="relative mx-auto my-32 items-center flex flex-col max-w-7xl px-6 text-center md:px-8">
				<h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-5xl md:text-6xl lg:text-7xl dark:from-white dark:to-white/40">
					What's next for Campsite?
				</h1>
				<p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
					We're working hard to bring you the best experience
					possible. Here's what we have planned.
				</p>
				<div className="animate-fade-up max-w-[800px] mt-16 opacity-0 [--animation-delay:400ms] [perspective:2000px] flex flex-col gap-4 items-start">
					<h2 className="text-2xl font-bold">Pre-Alpha</h2>
					<Timeline>
						{preAlphaTimeline.map((item, index, array) => (
							<TimeLineCard
								key={index}
								{...item}
								last={array.length - 1 === index}
							/>
						))}
					</Timeline>
					<h2 className="text-2xl font-bold">Alpha</h2>
					<Timeline>
						{alphaTimeline.map((item, index, array) => (
							<TimeLineCard
								key={index}
								{...item}
								last={array.length - 1 === index}
							/>
						))}
					</Timeline>
					<h2 className="text-2xl font-bold">Private Beta</h2>
					<Timeline>
						{privateBetaTimeline.map((item, index, array) => (
							<TimeLineCard
								key={index}
								{...item}
								last={array.length - 1 === index}
							/>
						))}
					</Timeline>
					<h2 className="text-2xl font-bold">Beta</h2>
					<Timeline>
						<span>TBC</span>
						{/* {betaTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))} */}
					</Timeline>
					<h2 className="text-2xl font-bold">Release 1.0</h2>
					<Timeline>
						<span>TBC</span>
						{/* {releaseTimeline.map((item, index, array) => (
							<TimeLineCard key={index} {...item} last={array.length - 1 === index} />
						))} */}
					</Timeline>
				</div>
			</main>
		</>
	);
}
