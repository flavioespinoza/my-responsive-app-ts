import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BoxRow from '@/components/BoxRow'
import { ModeToggle } from '@/components/ModeToggle'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-500">
      <Header />
      <main className="flex-grow p-4 space-y-4 w-full max-w-screen-lg">
        <ModeToggle />
        <BoxRow
          numBoxes={2}
          height={200}
          colors={['bg-red-500', 'bg-blue-500']}
          labels={['Box 1', 'Box 2']}
        />
        <BoxRow
          numBoxes={3}
          height={200}
          colors={['bg-green-500', 'bg-yellow-500', 'bg-purple-500']}
          labels={['Box 3', 'Box 4', 'Box 5']}
        />
        <BoxRow
          numBoxes={4}
          height={100}
          colors={['bg-pink-700', 'bg-orange-500', 'bg-teal-500', 'bg-indigo-500']}
          labels={['Box 6', 'Box 7', 'Box 8', 'Box 9']}
        />
      </main>
      <Footer />
    </div>
  )
}
