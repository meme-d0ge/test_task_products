import React from 'react';

const date = new Date()
const formatted = new Intl.DateTimeFormat('en-EN', {
    second: '2-digit',
    minute: '2-digit',
    hour:'2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
}).format(date);
const AboutPage = () => {
    return (
        <main className='container mx-auto px-2 flex-1 flex flex-col'>
            <h1 className='mx-auto text-4xl text-center font-bold'>About us</h1>

            <h2 className='mx-auto text-center dark:text-purple-500 text-green-500 w-full break-all text-3xl md:text-4xl'>Это тестовое приложение для демонстрации работы с Next.js</h2>

            <div className='flex-1 flex flex-col-reverse'>
                <time dateTime={date.toISOString()}>Created: {formatted}</time>
            </div>
        </main>
    );
};

export default AboutPage;