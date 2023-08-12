import React from 'react';

export { SectionTags };

type SectionTagsProps = {
  tags: { name: string; link: string }[];
  big?: boolean;
};
function SectionTags({ tags, big = false }: SectionTagsProps) {
  const tagsList = tags.map((tag, index) => {
    return (
      <a
        href={tag.link}
        key={index}
        target="_blank"
        className={`tag mb-1 mr-1 whitespace-nowrap bg-gray-100 px-2 py-1
      text-gray-800 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-500 active:text-gray-900
      ${big ? 'text-[0.9rem]' : 'text-xs'}
      `}
      >
        {tag.name}
      </a>
    );
  });
  return <div className="ml-2 mt-2 flex flex-row flex-wrap">{tagsList}</div>;
}
