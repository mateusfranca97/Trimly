import { Link } from "react-router-dom";

export default function MyAppointments() {
    return(
        <>
        <h1>MyAppointments</h1>
            <li><Link to={"/"} className="text-slate-900 font-semibold hover:underline">HomePage</Link></li>
        </>
    )
}