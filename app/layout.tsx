import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { Footer } from "~/components/footer"
import { Header } from "~/components/header"
import ParticleBackground from "~/components/particles"
import { ThemeProvider } from "~/components/theme/provider"
import { Toaster } from "~/components/ui/sonner"
import { TooltipProvider } from "~/components/ui/tooltip"
import { cn } from "~/lib/utils"

import "~/styles/globals.css"

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
})

export const metadata: Metadata = {
   title: "Campsite",
   description: "Time to cut the cord.",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={cn(
               "bg-background min-h-screen font-sans antialiased",
               fontSans.variable,
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               disableTransitionOnChange
            >
               <Header />
               <main className="mx-auto flex-1 overflow-hidden min-h-screen">
                  <TooltipProvider delayDuration={150}>
                     {children}
                  </TooltipProvider>
                  <ParticleBackground />
               </main>
               <Footer />
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   )
}
