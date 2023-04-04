import React from 'react';

export { Header };

type HeaderProps = {
  phone: string;
  address: string;
  title: string;
  image: string;
};
function Header({ phone, address, title, image }: HeaderProps) {
  return (
    <>
      <header className="flex flex-row items-center justify-between">
        <Address>
          {phone} <br /> {address}
        </Address>
        <h1 className="text-6xl tracking-tighter">{title}</h1>
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
