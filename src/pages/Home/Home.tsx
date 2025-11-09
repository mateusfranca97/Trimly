import { Link } from "react-router-dom";
import LogoGoogle from "../../assets/logotipo-da-google.png";
import LogoIphone from "../../assets/logotipo-da-apple.png";

export default function Home() {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-slate-50">
      {/* Coluna esquerda - desktop */}
      <div className="hidden lg:flex w-1/3 bg-slate-900 text-slate-50 flex-col justify-between p-10 rounded-r-3xl">
        <div className="flex flex-col gap-8">
          <h1 className="text-base font-bold tracking-tight">Trimly</h1>
          <h1 className="text-4xl text-white">
            Uma plataforma simples para agendar seu horário
          </h1>
          <p className="text-slate-500">Agende seu corte, barba ou colocação em poucos cliques. Veja disponibilidade em tempo real e receba lembretes automaticos.</p>
          <ul className="flex flex-col gap-3">
            <li>✅ Agendamentos online</li>
            <li>✅ Escolha do profissional favorito</li>
            <li>✅ Experiência rápida e complicações</li>
          </ul>
        </div>
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} ArkTech — Todos os direitos reservados.
        </p>
      </div>

      {/* Coluna direita - conteúdo principal */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-16 py-10 space-y-35  lg:space-y-10">
        <div className="flex w-full lg:h-1/2 justify-between text-3xl lg:text-base">
            <Link to={"/register"}>
                <p className="text-slate-900">Não tem conta? <b>Cadastrar</b></p>
            </Link>
            <Link to={"/register"}>
                <p className="text-slate-900">Esqueceu a senha? <b>Clique aqui</b></p>
            </Link>
        </div>
        {/* Título */}
        <div>
          <h1 className="text-7xl lg:text-5xl font-bold text-slate-900">
            Bem-vindo ao Trimly
          </h1>
          <p className="text-sm sm:text-3xl lg:text-lg text-slate-600 mt-2">
            Acesse sua conta para gerenciar seus agendamentos.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-7 lg:gap-4 sm:w-200 lg:w-150 w-full">
          <button className="flex items-center justify-center gap-5 lg:gap-3 w-full border border-slate-300 rounded-full h-30 lg:h-12 text-3xl lg:text-sm font-medium hover:bg-slate-100 transition">
            <img src={LogoGoogle} className="w-12 h-12 lg:w-6 lg:h-6" alt="Logo Google" />
            Entrar com Google
          </button>
          <button className="flex items-center justify-center gap-5 lg:gap-3 w-full border border-slate-300 rounded-full h-30 lg:h-12 text-3xl lg:text-sm font-medium hover:bg-slate-100 transition">
            <img src={LogoIphone} className="w-12 h-12 lg:w-6 lg:h-6" alt="Logo Iphone" />
            Entrar com Apple
          </button>
          <Link
            to="/login"
            className="w-full border border-slate-900 bg-slate-900 text-slate-50 rounded-full h-30 lg:h-12 flex items-center justify-center text-3xl lg:text-sm font-semibold hover:bg-slate-800 transition"
          >
            Entrar com Telefone ou Email
          </Link>
        </div>

        {/* Rodapé links */}
        <div className="flex justify-between text-2xl lg:text-xs text-slate-500 w-full max-w-lg">
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
