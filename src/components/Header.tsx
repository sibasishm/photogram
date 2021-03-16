const links = [
	{ name: 'Products', link: '/' },
	{ name: 'Sell', link: '/' },
	{ name: 'Account', link: '/' },
	{ name: 'My Cart', link: '/' },
];

export function Header(): JSX.Element {
	return (
		<header className='border-b-2 border-dark'>
			<div className='flex flex-col items-center justify-between p-2 py-4 border-b-8 border-gray-700 md:pl-8 md:flex-row'>
				<h1 className='p-2 px-3 text-4xl font-bold tracking-wide text-white uppercase transform -skew-x-6 bg-primary leading-tighter'>
					<a className='hover:underline' href='/'>
						Flopkart
					</a>
				</h1>
				<nav className='mt-4 md:mt-0'>
					<ul className='flex items-center justify-between'>
						{links.map(({ link, name }) => (
							<li
								key={name}
								className='flex-shrink-0 px-2 text-sm font-semibold uppercase group md:text-base sm:px-4 lg:text-lg md:px-6 lg:px-8'
							>
								<a
									href={link}
									className='relative flex items-center space-x-1 md:spce-x-2'
								>
									{name === 'My Cart' ? (
										<>
											<span>{name}</span>
											<span className='flex items-center justify-center w-6 h-6 text-sm text-white rounded-full bg-primary'>
												1
											</span>
										</>
									) : (
										name
									)}
									<span className='absolute w-full h-1 transition transform scale-x-0 rounded-sm duration-400 ease-bloop bg-primary -bottom-2 group-hover:scale-x-110'></span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<label htmlFor='searchbox' className='sr-only'>
				Search
			</label>
			<input
				className='w-full h-12 px-2'
				type='text'
				name='search'
				id='search'
				placeholder='Find your favourite item...'
			/>
		</header>
	);
}
