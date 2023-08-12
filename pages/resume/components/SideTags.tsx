import { Icon } from '#root/components/Icon';
import React from 'react';

export { SideTags };

function SideTags() {
  const printThis = () => {
    window.print();
  };

  return (
    <div className="fixed top-2 z-10 xl:top-20 print:hidden">
      <SideTag onClick={printThis}>
        <Icon src="printer" width={12} height={12} className="inline" />
        <h5 className="hidden lg:inline">Print This</h5>
      </SideTag>

      <a className="tag" href="/">
        <SideTag>
          <Icon src="people" width={12} height={12} className="inline" />
          <h5 className="hidden lg:inline">Check HoA</h5>
        </SideTag>
      </a>
    </div>
  );
}

type SideTagProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
function SideTag({ children, onClick }: SideTagProps) {
  return (
    <div
      onClick={onClick}
      className="row flex cursor-pointer items-center gap-3 rounded-e-md bg-neutral-700 p-2 text-[1.3rem] text-white drop-shadow-md last:mt-3 md:px-4 print:px-4"
    >
      {children}
    </div>
  );
}
