import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { PWAInstall } from "@/components/pwa-install"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "University Syllabus - 6th Semester",
  description: "Complete 6th semester syllabus for Computer Science & Engineering - Available offline",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["university", "syllabus", "computer science", "engineering", "6th semester", "offline"],
  authors: [{ name: "University Syllabus Team" }],
  creator: "University Syllabus Team",
  publisher: "University Syllabus Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon-192x192.png",
    shortcut: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Syllabus 6th Sem",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Syllabus 6th Sem",
    "application-name": "University Syllabus",
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#3b82f6",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${roboto.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Syllabus 6th Sem" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="University Syllabus" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
      </head>
      <body className="font-sans selection:bg-primary/20 selection:text-primary">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-14 items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                    Syllabus Archive
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="https://v0-deadline-mate-landing-page.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold transition-all hover:text-primary"
                  >
                    <img
                      src="/images/deadlinemate-icon.png"
                      alt=""
                      className="h-5 w-5 grayscale contrast-125 transition-all group-hover:grayscale-0"
                    />
                    <span>Try deadlineMate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
          <footer className="border-t border-border/40 bg-background py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Developed by</p>
                <p className="text-2xl font-bold tracking-tight">Nishan Singh</p>
                <div className="h-px w-12 bg-border/60" />
              </div>
            </div>
          </footer>
          <PWAInstall />
          <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
