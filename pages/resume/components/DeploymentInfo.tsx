import React from 'react';
import { Icon } from '#root/components/Icon';

export { DeploymentInfo };

function DeploymentInfo() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-gray-600 md:flex-row md:gap-0">
      <a
        href="https://github.com/arabyalhomsi/the-software-engineer-showcaser/actions"
        target="_blank"
      >
        <img
          src="https://github.com/arabyalhomsi/the-software-engineer-showcaser/actions/workflows/deploy-github-pages.yml/badge.svg"
          alt="deployment tag"
          className="mx-3 h-5"
        />
      </a>
      <a
        href="https://github.com/arabyalhomsi/the-software-engineer-showcaser"
        className="flex flex-row items-center gap-2"
      >
        <span>View the source on Github</span>
        <Icon src="github" width={12} height={12} />
      </a>
    </div>
  );
}
