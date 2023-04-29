import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Icon } from './Icon';

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
  const icon = type === ListType.BULLET ? 'dot' : 'check-circle-fill';

  const ListMembers = points.map((content, index) => {
    return (
      <li
        className="flex flex-row items-start gap-2 leading-[1.66rem]"
        key={index}
      >
        <Icon
          className={`mt-0.5 ${
            ListType.BULLET === type ? 'scale-150' : 'text-gray-500'
          }`}
          src={icon}
          width={12}
          height={12}
        />

        <ReactMarkdown children={content} className="whitespace-pre-wrap" />
      </li>
    );
  });

  return <ul className="ml-2">{ListMembers}</ul>;
}
