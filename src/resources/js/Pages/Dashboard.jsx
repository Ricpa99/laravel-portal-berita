import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export default function Dashboard({ auth, user }) {
    const { flash, errors } = usePage().props
    const [values, setValues] = useState({
        title: null,
        description: null,
        category: null,
    })

    function hendleCange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value
        }))
    }

    function hendleSubmit(e) {
        e.preventDefault()
        router.post('/myNews', values)
    }
    function delet(e) {
        e.preventDefault()
        router.delete('/news/delet', e)
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  bg-base-100 shadow-xl text-black rounded-2xl">
                    {/* <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"> */}
                    <form onSubmit={hendleSubmit}>
                        <div className="flex justify-center text-center">
                            {flash.message && (<div className='mt-3 max-w-lg alert alert-info shadow-lg'>{flash.message}</div>)}
                        </div>
                        <div className="p-6 text-gray-900">
                            <input value={values.title} id="title" onChange={hendleCange} type="text" placeholder="Title" className="input input-bordered w-full m-1" required />
                            {errors.title && (<div className='max-w-lg alert alert-error shadow-lg'>{errors.title}</div>)}
                            <input value={values.description} id="description" onChange={hendleCange} type="text" placeholder="Description" className="input input-bordered w-full m-1" required />
                            {errors.description && (<div className='max-w-lg alert alert-error shadow-lg'>{errors.description}</div>)}
                            <input value={values.category} id="category" onChange={hendleCange} type="text" placeholder="Category" className="input input-bordered w-full m-1" required />
                            {errors.category && (<div className='max-w-lg alert alert-error shadow-lg'>{errors.category}</div>)}
                            <button type='submit' className='btn w-full my-2 mx-2 btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="p-7 flex flex-wrap gap-3">
                    {user.data ?
                        user.data.map((resul, i) => {
                            return (
                                <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl text-black">
                                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {resul.title}
                                            <div className="badge badge-secondary">New</div>
                                        </h2>
                                        <p>{resul.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge p-3 bg-slate-600 text-white ">{resul.category}</div>
                                            <div className="badge badge-outline"><Link href={`/myNews/${resul.id}/edit`}
                                                as='button' data={{ id: resul.id }} >edit</Link></div>
                                            <div className="badge badge-outline">
                                                <Link href={route('news.destroy')} as='button' method='delete' data={{ id: resul.id }} >delet</Link></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : (<div className='alert alert-info' >Berita masih kosong </div>)}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
