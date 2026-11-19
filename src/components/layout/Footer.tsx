import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/config/site";
import { getContactLinks } from "@/lib/contact-links";

export function Footer() {
  const links = getContactLinks();
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-400">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo inverted size="md" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {siteConfig.slogan} Soluciones digitales para empresas, emprendedores y pequeños negocios.
          </p>
          <p className="mt-6 text-sm">
            Fundador: <span className="text-neutral-200">{siteConfig.founder}</span>
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Navegación
          </h3>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contacto
          </h3>
          <ul className="space-y-2.5 text-sm">
            {links.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-white"
                >
                  <Icon className="size-4 shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.copyrightYear} EDUGO. Todos los derechos reservados.</p>
          <p>{siteConfig.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
