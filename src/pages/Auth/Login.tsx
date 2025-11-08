import { Link } from "react-router-dom";

export default function Login() {
    return(
        <>
            <h1>Login</h1>
            <li>
                <Link to={"/"} className="text-slate-900 font-semibold hover:underline">HomePage</Link>
            </li>
        </>
    )
}