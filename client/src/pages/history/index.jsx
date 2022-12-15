import Head from 'next/head';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function History() {
    return (
        <MainLayout>
            <Head>
                <title>History | SPORTSBOOK</title>
            </Head>
            <div className="bg-black rounded-3xl p-8 flex items-center justify-center w-full">history</div>
        </MainLayout>
    );
}
