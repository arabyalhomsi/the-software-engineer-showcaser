import { BasicInfo, KernedLetter } from '#root/services/ContentLoader/types';
import React from 'react';

export { Header };

type HeaderProps = { basicInfo: Omit<BasicInfo, 'profiles'> };
function Header({ basicInfo }: HeaderProps) {
  return (
    <>
      <header className="grid grid-cols-6 items-center justify-between">
        <div className="col-start-1 col-end-2 justify-self-start">
          <Address>
            {basicInfo.phone} <br /> {basicInfo.address}
          </Address>
        </div>
        <div className="col-start-2 col-end-6 justify-self-center">
          <a href={basicInfo.url}>
            <h1 className="text-6xl tracking-tighter">
              <NameKerned kernedLetters={basicInfo.nameKerned} />
            </h1>
          </a>
        </div>

        <div className="col-start-6 col-end-6 justify-self-end">
          <ProfilePicture image={basicInfo.image} />
        </div>
      </header>
    </>
  );
}

type NameKerned = { kernedLetters: KernedLetter[] };
function NameKerned({ kernedLetters }: NameKerned) {
  const title = kernedLetters.map((letter, index) => {
    return typeof letter === 'string' ? (
      <span key={index}>{letter}</span>
    ) : (
      <span style={{ letterSpacing: letter.letterSpacing }} key={index}>
        {letter.character}
      </span>
    );
  });
  return <>{title}</>;
}

type AddressProps = { children: React.ReactNode };
function Address({ children }: AddressProps) {
  return <address className="text-sm not-italic leading-5">{children}</address>;
}

type ProfilePictureProps = { image: string };
function ProfilePicture({ image }: ProfilePictureProps) {
  return <img className="h-24 w-24 rounded-full" src={image} />;
}
