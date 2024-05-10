const NewsList = ({ data }) => {
    return data.map((resul, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl text-black">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {resul.title}
                            <div className="badge badge-secondary">New</div>
                        </h2>
                        <p>{ resul.description }</p>
                        <div className="card-actions justify-end">
                     </div>
                    </div>
                </div>
    })
}

export default NewsList;