import React from 'react';

export { SectionTitle };

type SectionTitleProps = {
  left?: string;
  middle?: string;
  right?: string;
};
function SectionTitle({ left, right, middle }: SectionTitleProps) {
  return (
    <div className="mb-1 grid w-full grid-cols-3 font-bold">
      {left && (
        <h3 className="col-start-1 col-end-2 justify-self-start">{left}</h3>
      )}
      {middle && (
        <h3 className="col-start-2 col-end-3 justify-self-center">{middle}</h3>
      )}
      {right && (
        <h3 className="col-start-3 col-end-4 justify-self-end">{right}</h3>
      )}
    </div>
  );
}
