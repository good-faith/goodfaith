import * as React from 'react'
import { useState, useEffect } from 'react';

// tslint:disable-next-line: nx-enforce-module-boundaries
import { PageTitle } from '../../../../libs/ui-header/src/lib/page-title'
import { ApiResponse, API_URL } from '@goodfaith/api-interface'

import './app.scss';



export const App = () => {
  
    
    // tslint:disable-next-line: no-shadowed-variable
    const [ apiResponse, setApiResponse ] = useState<ApiResponse>({message: 'Loading....'});
    useEffect(() => {
      fetch(API_URL).then(r => r.json()).then(setApiResponse)
  }, [])

    return (
      <div className='app' >
        <header className="flex">
       <main>
         <p>
           { apiResponse.message }
         </p>
       </main>
        <PageTitle />
        </header>
      </div>
    );
}
