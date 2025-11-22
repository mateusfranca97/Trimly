import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return(
        <>
            <h1>ForgotPassword</h1>
            <li><Link to={"/home"} className="text-slate-900 font-semibold hover:underline">Home</Link></li>
        </>
    )
}