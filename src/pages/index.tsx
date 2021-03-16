import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
				<title>Photogram</title>
			</Head>
			<main className='container p-8 mx-auto'>
				<ol className='grid grid-cols-1 gap-12 md:grid-cols-2'>
					<li className='bg-gray-200 border h-96'></li>
					<li className='bg-gray-200 border h-96'></li>
					<li className='bg-gray-200 border h-96'></li>
					<li className='bg-gray-200 border h-96'></li>
					<li className='bg-gray-200 border h-96'></li>
					<li className='bg-gray-200 border h-96'></li>
					<li className='bg-gray-200 border h-96'></li>
				</ol>
			</main>
		</>
	);
}
