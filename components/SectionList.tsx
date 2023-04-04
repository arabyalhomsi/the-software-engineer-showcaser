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
      <li
        className="mb-1 flex flex-row items-start gap-2 leading-6"
        key={index}
      >
        <img src={`/assets/images/${icon}`} />
        <ReactMarkdown children={content} />
      </li>
    );
  });

  return <ul className="ml-2">{ListMembers}</ul>;
}
