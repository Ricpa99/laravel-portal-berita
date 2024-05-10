import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar'
import NewsList from '@/Components/Homepage/NewsList'
import Paginator from '@/Components/Homepage/Paginator'

export default function Home({ auth, title, news }) {
    console.log(news.links[3].url);
    return (
        <div className='min-h-screen bg-slate-400 text-white'>
            <Head title={title}></Head>
            <Navbar user={auth.user} />
            <div className='flex justify-center flex-col items-center lg:flex-row lg:flex-wrap
            lg:items-stretch gap-4 p-4'>
                <NewsList data={ news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator total={news} />
            </div>
        </div>
    )
}