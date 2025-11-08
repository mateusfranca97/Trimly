import { Link } from "react-router-dom";

export default function Register() {
    return(
        <>
            <h1>Register</h1>
            <li><Link to={"/"} className="text-slate-900 font-semibold hover:underline">HomePage</Link></li>
        </>
    )
}