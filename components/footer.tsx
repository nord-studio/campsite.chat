import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Icons from "./icons"

const footerNavs = [
	{
		label: "About",
		items: [
			{
				href: "/",
				name: "About",
				disabled: false,
			},
			{
				href: "/team",
				name: "Team",
				disabled: false,
			},
			{
				href: "/roadmap",
				name: "Roadmap",
				disabled: false,
			},
		],
	},
	{
		label: "Downloads",
		items: [
			{
				href: "/api/download/windows",
				name: "Windows",
				disabled: false,
			},
			{
				href: "/api/download/macos",
				name: "macOS",
				disabled: false,
			},
			{
				href: "/api/download/linux",
				name: "Linux",
				disabled: false,
			},
		],
	},
];

const footerSocials = [
   {
      href: "/github",
      name: "GitHub",
      icon: <GitHubLogoIcon className="size-4" />,
   },
   {
      href: "/bluesky",
      name: "BlueSky",
      icon: <Icons.BlueSky className="size-4" />,
   },
]

export function Footer() {
   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               <div className="mb-12 flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2">
                     <Icons.Campsite className="w-8 h-10" />
                     <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        Campsite
                     </span>
                  </Link>
                  <div className="flex flex-col min-h-full justify-between">
                  <p className="max-w-xs">A new communication platform built from the ground up.</p>
                     <Link className="flex flex-row gap-2 items-center" href="https://nordstud.io">
                        A <Icons.Nord className="w-4 h-4" /> Nord Studio 
                        project.
                     </Link>
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                  {footerNavs.map(nav => (
                     <div key={nav.label}>
                        <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                           {nav.label}
                        </h2>
                        <ul className="grid gap-2">
                           {nav.items.map(item => (
                              <li key={item.name}>
                                 <Link
                                    href={item.href}
                                    data-disabled={item.disabled}
                                    tabIndex={item.disabled ? -1 : undefined}
                                    aria-disabled={item.disabled}
                                    className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 data-[disabled=false]:hover:text-gray-200 data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed"
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
               <div className="flex space-x-5 sm:mt-0 sm:justify-center">
                  {footerSocials.map(social => (
                     <Link
                        key={social.name}
                        href={social.href}
                        className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
                     >
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                     </Link>
                  ))}
               </div>
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  Copyright ©
                  {" "}
                  {new Date().getFullYear()}
                  {" "}
                  <Link href="https://nordstud.io" className="cursor-pointer">
                     Nord Studio
                  </Link>
                  . All Rights Reserved.
               </span>
            </div>
         </div>
      </footer>
   )
}
