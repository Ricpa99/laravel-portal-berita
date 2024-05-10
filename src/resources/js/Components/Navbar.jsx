
import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({ user }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href={route('')} className="btn text-black btn-ghost text-xl">TopInfo</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-black" />
        </div>
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 text-black shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {!user ?
              <>
                <li><Link href={route('login')} as="button">Login</Link></li>
                <li><Link href={route('register')} as="button" >Register</Link></li>
              </>
              :
              <>
                <li>
                  <Link href={route('dashboard')} as="button" className="justify-between">
                    Dashboard
                    <span className="badge bg-slate-600 text-white">New</span>
                  </Link>
                </li>
                <li><Link>Settings</Link></li>
                <li><Link href={route('logout')} as="button" method="post">Logout</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;