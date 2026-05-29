import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import logo from "@/assets/edxcont-logo.png";
import heroBanner from "@/assets/hero-banner.jpg";
import eduardoPortrait from "@/assets/eduardo-portrait.png";
import strategyImg from "@/assets/strategy.jpg";
import { Reveal } from "@/components/Reveal";
import { SplashScreen } from "@/components/SplashScreen";

const WHATSAPP = "https://wa.me/5500000000000"; // ADICIONAR NÚMERO
const LINK_MATERIAL = "#"; // ADICIONAR LINK

function CTA({
  children,
  href = WHATSAPP,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "text-primary-foreground hover:shadow-[var(--shadow-elegant)]"
      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
      style={variant === "primary" ? { backgroundImage: "var(--gradient-primary)" } : undefined}
    >
      {children}
    </a>
  );
}

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashScreen />
      {/* NAV - overlay on banner, dark on scroll */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-secondary/95 backdrop-blur-md shadow-[var(--shadow-elegant)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <img
            src={logo}
            alt="Eduardo Oliveira - Consultoria Contábil"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-12" : "h-16"} ${scrolled ? "" : "brightness-0 invert"}`}
          />


          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "Serviços", href: "#servicos" },
              { label: "Sobre", href: "#sobre" },
              { label: "Resultados", href: "#resultados" },
              { label: "Materiais", href: "#materiais" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-sm font-medium transition-colors ${
                  scrolled ? "text-white/80 hover:text-white" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`hidden h-10 w-10 items-center justify-center rounded-full border transition-all sm:flex ${
                scrolled
                  ? "border-white/20 text-white/75 hover:border-accent hover:text-accent"
                  : "border-white/25 text-white/85 hover:border-white hover:bg-white/10 hover:text-white"
              }`}
            >
              <Instagram className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-secondary shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(0,0,0,0.45)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-3.5 w-3.5 fill-white" strokeWidth={0} />
              </span>
              <span className="hidden sm:inline">Fale conosco</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </a>
          </div>
        </div>

      </header>

      {/* HERO BANNER */}
      <section className="relative isolate -mt-px overflow-hidden">
        <img
          src={heroBanner}
          alt="Consultoria contábil corporativa"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero-overlay)" }}
        />
        <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center px-6 pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur">
              Contabilidade Estratégica
            </span>
            <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Reduza seus impostos de forma legal e{" "}
              <span className="text-accent">pare de perder dinheiro todos os meses!</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Se você é prestador de serviço, profissional da saúde ou dono de empresa, existe
              uma forma mais inteligente de pagar impostos, e a maioria não faz ideia disso.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <span className="dot-pulse h-2 w-2 rounded-full" />
                Planejamento tributário na prática
              </span>
              <span className="flex items-center gap-2">
                <span className="dot-pulse h-2 w-2 rounded-full" />
                Diagnóstico gratuito
              </span>
              <span className="flex items-center gap-2">
                <span className="dot-pulse h-2 w-2 rounded-full" />
                Atendimento direto com contador
              </span>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CTA>CONVERSE COMIGO NO WHATSAPP</CTA>
              <a
                href="#servicos"
                className="text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Ver nossos serviços →
              </a>
            </div>
          </motion.div>

          {/* scroll indicator */}
          <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
              <motion.span
                className="h-1.5 w-1 rounded-full bg-white/80"
                animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP - infinite marquee */}
      <section className="overflow-hidden border-y border-border bg-muted">
        <div className="flex w-max gap-12 whitespace-nowrap py-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground [animation:marquee_35s_linear_infinite]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 pr-12">
              {["Contábil", "Fiscal", "Legalizações", "Departamento Pessoal", "Folha de Pagamento"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>


      {/* VERDADE / SERVIÇOS */}
      <section id="servicos" className="bg-background scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Minha abordagem
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A verdade é simples.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A maioria dos empresários paga mais imposto do que deveria. Não porque querem, mas
              porque nunca tiveram alguém que realmente olhasse o negócio com estratégia.
            </p>
            <p className="mt-4 font-medium text-foreground">
              Ofereço suporte contábil completo para sua operação:
            </p>

          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Contabilidade Completa", d: "Registro, organização e acompanhamento contábil da sua empresa com mais clareza e segurança." },
              { t: "Abertura e Regularização", d: "Orientação completa para abrir seu CNPJ ou colocar sua empresa em dia." },
              { t: "Planejamento Tributário", d: "Análise do regime ideal para reduzir legalmente a carga tributária e evitar pagamentos desnecessários." },
              { t: "Gestão Fiscal", d: "Apuração de impostos, envio de declarações e cumprimento das exigências fiscais." },
              { t: "Folha de Pagamento", d: "Administração das rotinas trabalhistas e obrigações ligadas aos seus colaboradores." },
              { t: "Saúde e Prestadores", d: "Soluções pensadas para quem precisa pagar menos imposto e ter uma estrutura mais inteligente." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="group h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <span className="text-base font-bold">0{((i % 9) + 1)}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-3xl text-center">
            <p className="border-l-2 border-primary pl-6 text-left text-lg italic text-foreground/90">
              Contabilidade não é só cumprir obrigação. É sobre pagar o mínimo possível dentro
              da lei e crescer com segurança.
            </p>

            <div className="mt-10">
              <CTA>ME DEIXE ANALISAR SEU NEGÓCIO</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE - dark navy band */}
      <section id="sobre" className="relative overflow-hidden scroll-mt-24" style={{ backgroundImage: "var(--gradient-navy)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
              <img
                src={eduardoPortrait}
                alt="Eduardo Oliveira, contador"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative aspect-square w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Eu vou resolver seus problemas…
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Sou o Eduardo Oliveira, contador especializado em planejamento tributário e estratégia empresarial.
            </h2>

            <p className="mt-6 text-white/80">
              Hoje ajudo prestadores de serviço, clínicas e profissionais da saúde a:
            </p>
            <ul className="mt-5 space-y-3 text-white">
              {["Organizar a empresa", "Entender exatamente quanto estão pagando", "Reduzir impostos de forma legal"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 dot-pulse h-2 w-2 rounded-full" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-white/80">
              Aqui, a contabilidade não é burocracia.
              <br />
              <span className="font-semibold text-white">É ferramenta de crescimento.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* O QUE PREPARAMOS */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              O que eu entrego
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Planejamento contábil estratégico
            </h2>

          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <Reveal>
              <img
                src={strategyImg}
                alt="Planejamento contábil estratégico"
                width={1280}
                height={896}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
              />
            </Reveal>
            <div className="space-y-5">
              {[
                ["Planejamento Tributário", "Você entende exatamente o melhor regime para pagar menos imposto."],
                ["Diagnóstico Inicial", "Analiso sua situação atual e mostro onde você está perdendo dinheiro."],
                ["Acompanhamento Contábil", "Não é só abrir empresa, é cuidar dela todos os meses."],
                ["Atendimento Direto", "Sem enrolação, sem atendimento genérico."],

              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 font-bold text-primary">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="bg-muted scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Empresas que trabalham com estratégia tributária conseguem:
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {["Reduzir custos", "Ter previsibilidade financeira", "Crescer com mais segurança"].map(
              (t, i) => (
                <Reveal key={t} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card px-6 py-10 text-lg font-semibold text-foreground shadow-[var(--shadow-soft)]">
                    {t}
                  </div>
                </Reveal>
              ),
            )}
          </div>
          <Reveal delay={0.2} className="mt-14">
            <p className="text-xl text-foreground">
              A diferença não está no quanto você fatura.
              <br />
              <span
                className="bg-clip-text font-bold text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Está no quanto você consegue manter.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* MATERIAIS GRATUITOS */}
      <section id="materiais" className="bg-background scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Recursos gratuitos
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Comece agora com materiais gratuitos
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { t: "Planejamento Simplificado", d: "Aprenda o básico para organizar sua empresa" },
              { t: "Receita Saúde", d: "Entenda como funciona a tributação para profissionais da saúde" },
              { t: "Planilhas para MEI", d: "Controle financeiro simples e prático" },
            ].map((m, i) => (
              <Reveal key={m.t} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="h-1 w-12 rounded-full" style={{ backgroundImage: "var(--gradient-primary)" }} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{m.t}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.d}</p>
                  <a
                    href={LINK_MATERIAL}
                    className="mt-6 inline-flex items-center justify-center rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    ACESSAR AGORA
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-navy)" }}>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Vamos conversar?
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Seu negócio precisa de uma contabilidade profissional
            </h2>
            <p className="mt-5 text-white/75">
              Diagnóstico gratuito e direto com o contador responsável.
            </p>
            <div className="mt-10">
              <CTA>ME DEIXE ANALISAR SEU NEGÓCIO</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl space-y-4 px-6 py-12 text-center">
          <img src={logo} alt="EDXCont" className="mx-auto h-16 w-auto" />
          <p className="text-xs text-muted-foreground">
            © 2026 EDXCont Contabilidade LTDA | CNPJ: 39.566.457/0001-01 – Todos os direitos
            reservados
          </p>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Este site não é afiliado, endossado, patrocinado ou administrado por Facebook,
            Instagram, TikTok, LinkedIn ou qualquer uma de suas empresas controladoras. Todas as
            marcas pertencem aos seus respectivos proprietários. Ao acessar este site, você
            concorda que a responsabilidade sobre as informações, serviços e ofertas é
            exclusivamente da EDXCont Contabilidade LTDA.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
