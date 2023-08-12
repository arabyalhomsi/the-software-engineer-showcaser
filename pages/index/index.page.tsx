import React, { useEffect } from 'react';

export { Page };

function Page() {
  // We redirect to /resume until we have a proper main page
  useEffect(() => {
    window.location.href = '/resume';
  }, []);

  return <></>;
}
