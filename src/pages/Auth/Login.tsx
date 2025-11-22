import { Link } from "react-router-dom";
import LogoGoogle from "../../assets/logotipo-da-google.png";
import LogoApple from "../../assets/logotipo-da-apple.png";
import { Button } from "../../components/ui/Button";

const currentYear = new Date().getFullYear();

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50">
      {/* Coluna esquerda - destaque (desktop) */}
      <aside className="hidden lg:flex lg:w-1/3 bg-slate-900 text-slate-50 flex-col justify-between px-10 py-8 rounded-r-3xl">
        <div className="flex flex-col gap-8">
          <span className="text-sm font-semibold tracking-tight">
            Trimly
          </span>

          <h1 className="text-3xl xl:text-4xl font-semibold text-white">
            Uma plataforma simples para agendar seu horário
          </h1>

          <p className="text-sm text-slate-400 leading-relaxed">
            Agende seu corte, barba ou coloração em poucos cliques. 
            Veja a disponibilidade em tempo real e receba lembretes automáticos.
          </p>

          <ul className="flex flex-col gap-2 text-sm text-slate-200">
            <li>✅ Agendamentos online 24/7</li>
            <li>✅ Escolha do profissional favorito</li>
            <li>✅ Experiência rápida e sem complicações</li>
          </ul>
        </div>

        <p className="text-[11px] text-slate-500">
          © {currentYear} ArkTech — Todos os direitos reservados.
        </p>
      </aside>

      {/* Coluna direita - conteúdo principal */}
      <main className="flex-1 flex items-center justify-center px-6 lg:px-16">
        <div className="h-full max-w-xl flex flex-col justify-center gap-10">
          {/* Top links */}
          <header className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
            <Link to="/register" className="hover:text-slate-900 transition-colors">
              Não tem conta? <span className="font-semibold">Cadastrar</span>
            </Link>

            {/* Quando tiver a rota, altere para /forgot-password por exemplo */}
            <Link to="/forgotpassword" className="hover:text-slate-900 transition-colors">
              Esqueceu a senha? <span className="font-semibold">Clique aqui</span>
            </Link>
          </header>

          {/* Título e descrição */}
          <section className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Bem-vindo ao Trimly
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Acesse sua conta para gerenciar seus agendamentos, ver histórico
              e acompanhar seus próximos horários.
            </p>
          </section>

          {/* Botões de login */}
          <section className="flex flex-col gap-4">
            <Button
              asChild
              variant={"outline"}
              type="button"
              aria-label="Entrar com conta Google"
            >
              <Link to={"/home"} className="flex gap-2">
                <img
                  src={LogoGoogle}
                  className="w-5 h-5"
                  alt="Logo Google"
                />
                Entrar com Google
              </Link>
            </Button>

            <Button
              asChild
              variant={"outline"}
              type="button"
              aria-label="Entrar com conta Apple"
            >
              <Link to={"/home"} className="flex gap-2">
                <img
                  src={LogoApple}
                  className="w-5 h-5"
                  alt="Logo Apple"
                />
                Entrar com Apple
              </Link>
            </Button>
            
            <Button variant={"link"} className=" bg-slate-900 text-white transition-colors" asChild>
              <Link to="/home">
                Entrar com telefone ou e-mail
              </Link>
            </Button>
          </section>

          {/* Rodapé links */}
          <footer className="flex justify-between text-[11px] sm:text-xs text-slate-500">
            <Link to="#" className="hover:text-slate-900 transition-colors">
              Políticas de Privacidade
            </Link>
            <Link to="#" className="hover:text-slate-900 transition-colors">
              Termos de Serviço
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}
