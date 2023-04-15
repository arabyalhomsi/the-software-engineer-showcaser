import React from 'react';
import { Icon } from '#root/components/Icon';

export { DeploymentInfo };

function DeploymentInfo() {
  return (
    <div className="mt-10 flex flex-row items-center justify-center text-gray-600">
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
        className="flex flex-row gap-2"
      >
        <span>View the source on Github</span>
        <Icon src="github" width={12} height={12} />
      </a>
    </div>
  );
}
