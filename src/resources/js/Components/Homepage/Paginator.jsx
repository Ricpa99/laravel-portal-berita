import { Link } from "@inertiajs/react";



const Paginator = ({ total }) => {
    const prev = total.links[total.current_page - 1].url
    const next = total.links[total.current_page + 1 ].url
    let current = total.current_page;
    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn shadow-xl">prev</Link>}
            <button className="btn">Page {current}</button>
            {next && <Link href={next} className="btn">next</Link>}
        </div>    
    )
}

export default Paginator