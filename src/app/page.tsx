import BoxRow from '@/components/BoxRow'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow p-4 space-y-4">
				<BoxRow numBoxes={2} height={200} colors={['bg-red-500', 'bg-blue-500']} />
				<BoxRow
					numBoxes={3}
					height={200}
					colors={['bg-green-500', 'bg-yellow-500', 'bg-purple-500']}
				/>
				<BoxRow
					numBoxes={4}
					height={100}
					colors={['bg-pink-500', 'bg-orange-500', 'bg-teal-500', 'bg-indigo-500']}
				/>
			</main>
			<Footer />
		</div>
	)
}
