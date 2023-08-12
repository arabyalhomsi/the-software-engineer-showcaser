import { Icon } from '#root/components/Icon';
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
        {links.length - 1 !== index && (
          <span className="invisible sm:visible print:visible">|</span>
        )}
      </React.Fragment>
    );
  });

  return (
    <address className="mb-4 mt-10 flex w-full flex-col flex-wrap items-center justify-between text-base not-italic sm:flex-row print:flex-row">
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
