'use client';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Main from '@/components/assets/main';
import Nav from '@/components/assets/nav';
import Content from '@/components/assets/content';

export default function Careers() {
	return (
		<>
			<main className="absolute w-full h-full bg-orange-400 dark:bg-black bg-image dark:bg-image-dark flex items-center justify-center transition-all duration-500 overflow-auto">
				<Main>
					<Nav name="Lorem Ipsum" logo="/favicon.ico" />
					<Content type="careers" />
				</Main>
			</main>
		</>
	);
}
