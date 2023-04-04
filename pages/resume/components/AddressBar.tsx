import React from 'react';

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
        <span>{links.length - 1 !== index ? '/' : ''}</span>
      </React.Fragment>
    );
  });

  return (
    <address className="my-7 flex w-full flex-row justify-between gap-4 text-sm not-italic">
      {NavLinks}
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
