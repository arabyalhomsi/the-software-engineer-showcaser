import React from 'react';
import emailIcon from '#root/assets/images/email.svg';
import githubIcon from '#root/assets/images/github.svg';
import globeIcon from '#root/assets/images/globe.svg';
import linkedinIcon from '#root/assets/images/linkedin.svg';

export { AddressBar };

function AddressBar() {
  return (
    <address className="mt-7 flex w-full flex-row justify-between gap-4 text-sm not-italic">
      <NavLink href="#" icon={emailIcon}>
        arabi.alhumsi@gmail.com
      </NavLink>
      <span>/</span>
      <NavLink href="#" icon={linkedinIcon}>
        arabyalhomsi
      </NavLink>
      <span>/</span>
      <NavLink href="#" icon={globeIcon}>
        arabi.alhumsi.com
      </NavLink>
      <span>/</span>
      <NavLink href="#" icon={githubIcon}>
        arabyalhomsi
      </NavLink>
    </address>
  );
}

type NavLinkProps = { href: string; icon: string; children: React.ReactNode };
function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <a href={href} target="_blank" className="flex flex-row items-center gap-2">
      <Icon src={icon} width={12} height={12} />
      {children}
    </a>
  );
}

type IconProps = { src: string; width: number; height: number };
function Icon({ src, width, height }: IconProps) {
  return <img src={src} height={height} width={width} />;
}
