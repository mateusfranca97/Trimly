import { Link } from "react-router-dom";

export default function AdminDashboard(){
    return (
        <>
        <h1>AdminDashboard</h1>
        <li><Link to={"/"} className="text-slate-900 font-semibold hover:underline">HomePage</Link></li>
        </>
    )
}