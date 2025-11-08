import { Link } from "react-router-dom";

export default function Booking() {
    return(
        <>
            <h1>Booking</h1>
            <li><Link to={"/"} className="text-slate-900 font-semibold hover:underline">HomePage</Link></li>
        </>
    )
}