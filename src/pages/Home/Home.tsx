import { Link } from "react-router-dom";

export default function Home() {

    {/* <h1>Home Page</h1>
    <ul className="flex space-x-5">
    <li><Link to={"/login"} className="text-slate-900 font-semibold hover:underline">Entrar</Link></li>
    <li><Link to={"/register"} className="text-slate-900 font-semibold hover:underline">Registrar</Link></li>
    <li><Link to={"/booking"} className="text-slate-900 font-semibold hover:underline">Reservas</Link></li>
    <li><Link to={"/my-appointments"} className="text-slate-900 font-semibold hover:underline">Apontamentos</Link></li>
    <li><Link to={"/admin"} className="text-slate-900 font-semibold hover:underline">Administrador</Link></li>
    </ul> */}

    return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 border">
        
        {/* Coluna esquerda - só aparece no desktop */}
        <div className="hidden lg:flex w-1/3 bg-slate-900 text-slate-50 flex-col justify-between p-10 rounded-r-3xl">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">ARKTECH</h1>
            <p className="text-sm text-slate-300">
            Agendamentos simples e profissionais.
            </p>
        </div>
        <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} ArkTech — Todos os direitos reservados.
        </p>
        </div>

        {/* Coluna direita */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-10 space-y-10">
        <div>
            <h1 className="text-3xl font-bold text-slate-900">
            Bem-vindo ao aplicativo
            </h1>
            <p className="text-slate-600 mt-2">
            Acesse sua conta para gerenciar seus agendamentos.
            </p>
        </div>

        <div className="flex flex-col gap-4 max-w-md">
            <button className="border border-slate-300 rounded-2xl h-12 text-sm font-medium hover:bg-slate-100 transition">
            Entrar com Google
            </button>
            <button className="border border-slate-300 rounded-2xl h-12 text-sm font-medium hover:bg-slate-100 transition">
            Entrar com Apple
            </button>
            <Link
            to="/login"
            className="border border-slate-900 bg-slate-900 text-slate-50 rounded-2xl h-12 flex items-center justify-center text-sm font-semibold hover:bg-slate-800 transition"
            >
            Entrar com Telefone ou Email
            </Link>
        </div>

        <div className="flex justify-between text-xs text-slate-500 max-w-md">
            <Link to="#" className="hover:text-slate-900">
            Políticas de Privacidade
            </Link>
            <Link to="#" className="hover:text-slate-900">
            Termos de Serviço
            </Link>
        </div>
        </div>
    </div>
    );
}