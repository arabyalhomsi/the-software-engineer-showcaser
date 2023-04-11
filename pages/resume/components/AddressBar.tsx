import React from 'react';
import iconsPath from 'bootstrap-icons/bootstrap-icons.svg';

export { AddressBar };

type AddressBarProps = {
  links: {
    icon: string;
    username: string;
    url: string;
  }[];
};

function AddressBar({ links }: AddressBarProps) {
  const NavLinks = links.map((link, index) => {
    return (
      <React.Fragment key={index}>
        <NavLink href={link.url} icon={link.icon} key={index}>
          {link.username}
        </NavLink>
        {links.length - 1 !== index && <span>|</span>}
      </React.Fragment>
    );
  });

  return (
    <address className="mb-2 mt-4 flex w-full flex-wrap justify-between text-base not-italic">
      {NavLinks}
    </address>
  );
}

type NavLinkProps = { href: string; icon: string; children: React.ReactNode };
function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row items-center gap-2 hover:underline"
    >
      <Icon src={icon} width={12} height={12} />
      {children}
    </a>
  );
}

type IconProps = { src: string; width: number; height: number };
function Icon({ src, width, height }: IconProps) {
  return (
    <svg className="bi" width={width} height={height} fill="currentColor">
      <use xlinkHref={`${iconsPath}#${src}`} />
    </svg>
  );
}
