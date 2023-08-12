import React from 'react';
import ReactMarkdown from 'react-markdown';

export { SectionSummary };

type SectionSummaryProps = {
  content?: string;
};
function SectionSummary({ content }: SectionSummaryProps) {
  return (
    <>{content && <ReactMarkdown className="mb-1" children={content} />}</>
  );
}
