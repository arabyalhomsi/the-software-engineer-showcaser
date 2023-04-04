import React from 'react';

export { Header };

type HeaderProps = {
  phone: string;
  address: string;
  title: string;
  image: string;
  url: string;
};
function Header({ phone, address, title, image, url }: HeaderProps) {
  return (
    <>
      <header className="flex flex-row items-center justify-between">
        <Address>
          {phone} <br /> {address}
        </Address>
        <a href={url}>
          <h1 className="text-6xl tracking-tighter">{title}</h1>
        </a>
        <ProfilePicture image={image} />
      </header>
    </>
  );
}

type AddressProps = { children: React.ReactNode };
function Address({ children }: AddressProps) {
  return <address className="text-sm not-italic leading-5">{children}</address>;
}

type ProfilePictureProps = { image: string };
function ProfilePicture({ image }: ProfilePictureProps) {
  return <img className="h-32 w-32 rounded-full" src={image} />;
}
