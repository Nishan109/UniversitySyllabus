"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WifiOff, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-950/50 dark:via-slate-900 dark:to-blue-950/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
            <WifiOff className="h-8 w-8 text-orange-600 dark:text-orange-400" />
          </div>
          <CardTitle className="text-xl font-semibold">You're Offline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            No internet connection detected. Don't worry - your syllabus content is still available!
          </p>
          
          <div className="space-y-3">
            <Link href="/" className="block">
              <Button className="w-full" variant="default">
                <Home className="h-4 w-4 mr-2" />
                Go to Home
              </Button>
            </Link>
            
            <Link href="/syllabus" className="block">
              <Button className="w-full" variant="outline">
                View Syllabus
              </Button>
            </Link>
            
            <Button 
              onClick={handleRefresh}
              variant="ghost" 
              className="w-full"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              This app works offline thanks to service worker caching
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
