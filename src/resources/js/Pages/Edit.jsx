import { Head, router, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar'
import { useState } from 'react';


export default function Edit({ auth, title, myNews }) {
    const { flash, errors } = usePage().props
    
    const [values, setValues] = useState({
        title : myNews.title,
        description : myNews.description,
        category : myNews.category,
        id : myNews.id
    })

    function hendleCange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value
        }))
    }
    
    const hendleSubmit = (e) => {
        e.preventDefault()
        router.put('/news/update', values)
    }
    
    console.log(myNews);
    return (
        <div className='min-h-screen bg-base-200 shadow-xl text-white'>
            <Head title={title}></Head>
            <Navbar user={auth.user} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-base-100 shadow-xl text-black my-6 rounded-2xl">
                    {/* <div className="card w-full lg:w-96 bg-base-100 shadow-xl text-black"> */}
                <form onSubmit={hendleSubmit}>
                        <div className="flex justify-center text-center ">
                        {flash.message && (<div className='my-4 max-w-lg alert alert-info shadow-lg'>{ flash.message }</div>)}
                        </div>
                        <div className="p-6 text-gray-900">
                        <input value={values.title}  id="title" onChange={hendleCange} type="text"  placeholder="Title" className="input input-bordered w-full m-1" />
                        {errors.title && (<div className='max-w-lg alert alert-error shadow-lg'>{ errors.title }</div>) }
                        <input value={values.description} name='description' id="description" onChange={hendleCange} type="text" placeholder="Description" className="input input-bordered w-full m-1" required/>
                        {errors.description && (<div className='max-w-lg alert alert-error shadow-lg'>{ errors.description }</div>) }
                        <input value={values.category} name='category' id="category" onChange={hendleCange}  type="text" placeholder="Category" className="input input-bordered w-full m-1" required/>
                        {errors.category && (<div className='max-w-lg alert alert-error shadow-lg'>{ errors.category }</div>) }
                        <button  type='submit' className='btn w-full mx-2 my-2 btn-primary'>Submit</button>
                        </div>
                    </form>
                    {/* </div> */}
            </div>
        </div>
    )
}