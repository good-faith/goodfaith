import * as React from 'react';
import { Component, useState, useEffect } from 'react';

import { PageTitle } from '../../../../libs/ui-header/src/lib/page-title'
import { ApiResponse, API_URL } from '../../../../libs/api-interface/src'

import './app.scss';

export class App extends Component {
  render() {
    
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
}
