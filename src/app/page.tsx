'use client';
import Main from '@/components/assets/main';
import Nav from '@/components/assets/nav';
import BasketballPlayerStats from '@/components/BasketballCard';

export default function Home() {
	return (
		<>
			<main className="absolute w-full h-full bg-orange-400 dark:bg-black bg-image dark:bg-image-dark flex items-center justify-center transition-all duration-500 overflow-hidden">
				<Main>
					<Nav name="Lorem Ipsum" logo="/favicon.ico" />
					<div className='w-full flex py-16 flex-col items-center'>
						<BasketballPlayerStats />
					</div>
				</Main>
			</main>
		</>
	);
}
