import React from 'react';

export { SectionTags };

type SectionTagsProps = { tags: { name: string; link: string }[] };
function SectionTags({ tags }: SectionTagsProps) {
  const tagsList = tags.map((tag, index) => {
    return (
      <a
        href={tag.link}
        key={index}
        target="_blank"
        className="mb-1 mr-1 bg-gray-300 px-2 py-1 text-xs text-gray-700
      hover:bg-gray-400 hover:text-gray-800 active:bg-gray-500 active:text-gray-900"
      >
        {tag.name}
      </a>
    );
  });
  return <div className="ml-2 mt-2 flex flex-row">{tagsList}</div>;
}
