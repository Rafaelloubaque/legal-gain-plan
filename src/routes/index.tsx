import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/edxcont-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDXCont Contabilidade — Reduza seus impostos de forma legal" },
      {
        name: "description",
        content:
          "Planejamento tributário e contabilidade estratégica para prestadores de serviço, profissionais da saúde e empresas. Diagnóstico gratuito.",
      },
      { property: "og:title", content: "EDXCont Contabilidade" },
      {
        property: "og:description",
        content:
          "Pague o mínimo de imposto dentro da lei. Contabilidade estratégica com atendimento direto.",
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5500000000000"; // ADICIONAR NÚMERO
const LINK_MATERIAL = "#"; // ADICIONAR LINK

function CTA({ children, href = WHATSAPP }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-wide text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_-20px_var(--primary)]"
      style={{ backgroundImage: "var(--gradient-primary)" }}
    >
      {children}
    </a>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto my-20 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
  );
}

function Landing() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      {/* NAV */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <img src={logo} alt="EDXCont Contabilidade" className="h-10 w-auto" />
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 sm:inline-block"
        >
          Falar no WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Reduza seus impostos de forma legal e pare{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            de perder dinheiro todos os meses!
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Se você é prestador de serviço, profissional da saúde ou dono de empresa, existe uma
          forma mais inteligente de pagar impostos, e a maioria não faz ideia disso.
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-foreground/80">
          <span>Planejamento tributário na prática</span>
          <span className="text-primary">|</span>
          <span>Diagnóstico gratuito do seu negócio</span>
          <span className="text-primary">|</span>
          <span>Atendimento direto com contador</span>
        </div>

        <div className="mt-12">
          <CTA>CONVERSE COMIGO NO WHATSAPP</CTA>
        </div>

        <p className="mt-16 text-sm uppercase tracking-[0.3em] text-primary/80">
          Contábil · Fiscal · Legalizações · Departamento Pessoal · Folha de Pagamento
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A verdade é simples.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A maioria dos empresários paga mais imposto do que deveria. Não porque querem, mas
            porque nunca tiveram alguém que realmente olhasse o negócio com estratégia.
          </p>
          <p className="mt-6 text-foreground">
            Oferecemos suporte contábil completo para sua operação:
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            {
              t: "Contabilidade Completa",
              d: "Registro, organização e acompanhamento contábil da sua empresa com mais clareza e segurança.",
            },
            {
              t: "Abertura e Regularização de Empresas",
              d: "Orientação completa para abrir seu CNPJ ou colocar sua empresa em dia.",
            },
            {
              t: "Planejamento Tributário",
              d: "Análise do regime ideal para reduzir legalmente a carga tributária e evitar pagamentos desnecessários.",
            },
            {
              t: "Gestão Fiscal e Obrigações Legais",
              d: "Apuração de impostos, envio de declarações e cumprimento das exigências fiscais.",
            },
            {
              t: "Folha de Pagamento",
              d: "Administração das rotinas trabalhistas e obrigações ligadas aos seus colaboradores.",
            },
            {
              t: "Prestadores de Serviço e Área da Saúde",
              d: "Soluções pensadas para quem precisa pagar menos imposto e ter uma estrutura mais inteligente.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/50"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
                <h3 className="font-semibold text-foreground">{s.t}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg italic text-foreground/90">
            Contabilidade não é só "cumprir obrigação". É sobre pagar o mínimo possível dentro da
            lei e crescer com segurança.
          </p>
          <div className="mt-10">
            <CTA>ME DEIXE ANALISAR SEU NEGÓCIO</CTA>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SOBRE */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="flex aspect-square items-center justify-center rounded-3xl border border-primary/30 bg-card/40 p-10">
            <div
              className="flex h-full w-full items-center justify-center rounded-2xl text-5xl font-bold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              EO
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Eu vou resolver seus problemas…
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Sou o Eduardo Oliveira, contador e responsável pela EDXCont.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Hoje ajudo prestadores de serviço, clínicas e profissionais da saúde a:
            </p>
            <ul className="mt-4 space-y-2 text-foreground">
              <li>• Organizar a empresa</li>
              <li>• Entender exatamente quanto estão pagando</li>
              <li>• Reduzir impostos de forma legal</li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              Aqui, a contabilidade não é burocracia.
              <br />
              <span className="text-foreground">É ferramenta de crescimento.</span>
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* O QUE PREPARAMOS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Aqui na EDXCont nós preparamos para você:
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            ["Planejamento Tributário", "Você entende exatamente o melhor regime pra pagar menos imposto"],
            ["Diagnóstico Inicial", "Analisamos sua situação atual e mostramos onde está perdendo dinheiro"],
            ["Acompanhamento Contábil", "Não é só abrir empresa, é cuidar dela todos os meses"],
            ["Atendimento direto", "Sem enrolação, sem atendimento genérico"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* RESULTADOS */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Empresas que trabalham com estratégia tributária conseguem:
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {["Reduzir custos", "Ter previsibilidade financeira", "Crescer com mais segurança"].map(
            (t) => (
              <div
                key={t}
                className="rounded-2xl border border-primary/30 bg-card/40 px-4 py-8 text-lg font-medium text-foreground"
              >
                {t}
              </div>
            ),
          )}
        </div>
        <p className="mt-12 text-xl text-foreground">
          A diferença não está no quanto você fatura.
          <br />
          <span
            className="bg-clip-text font-semibold text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Está no quanto você consegue manter.
          </span>
        </p>
      </section>

      <SectionDivider />

      {/* MATERIAIS GRATUITOS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Comece agora com materiais gratuitos
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Planejamento Simplificado", d: "Aprenda o básico para organizar sua empresa" },
            { t: "Receita Saúde", d: "Entenda como funciona a tributação para profissionais da saúde" },
            { t: "Planilhas para MEI", d: "Controle financeiro simples e prático" },
          ].map((m) => (
            <div
              key={m.t}
              className="flex flex-col rounded-2xl border border-border bg-card/60 p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">{m.t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.d}</p>
              <a
                href={LINK_MATERIAL}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                ACESSAR AGORA
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Vamos conversar?</p>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          Seu Negócio Precisa de uma Contabilidade Profissional
        </h2>
        <div className="mt-10">
          <CTA>ME DEIXE ANALISAR SEU NEGÓCIO</CTA>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-5xl space-y-4 px-6 py-10 text-center">
          <img src={logo} alt="EDXCont" className="mx-auto h-8 w-auto opacity-80" />
          <p className="text-xs text-muted-foreground">
            © 2026 EDXCont Contabilidade LTDA | CNPJ: 39.566.457/0001-01 – Todos os direitos
            reservados
          </p>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground/80">
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
