import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <ThemeProvider defaultTheme="light" enableSystem={true}>
          <main className="w-full p-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl rounded-lg shadow-lg flex flex-col items-center bg-background dark:bg-background text-foreground">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
