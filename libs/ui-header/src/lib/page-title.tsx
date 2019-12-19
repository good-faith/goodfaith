import * as React from 'react';

import './page-title.css';

// tslint:disable-next-line: no-empty-interface
export interface PageTitleProps {
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <div>
      <h1>Welcome to page-title component!</h1>
    </div>
  );
};

export default PageTitle;
