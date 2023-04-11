import React from 'react';
import ReactMarkdown from 'react-markdown';

export { SectionList };

export enum ListType {
  BULLET,
  CHECKMARK,
}

type SectionListProps = {
  type: ListType;
  points: string[];
};
function SectionList({ type, points }: SectionListProps) {
  const icon = type === ListType.BULLET ? 'dot.svg' : 'check.svg';

  const ListMembers = points.map((content, index) => {
    return (
      <li className="flex flex-row items-start gap-2" key={index}>
        <img src={`/assets/images/${icon}`} className="mt-0.5 w-4.5" />
        <ReactMarkdown children={content} />
      </li>
    );
  });

  return <ul className="ml-2">{ListMembers}</ul>;
}
