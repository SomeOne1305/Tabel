//libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient,QueryClientProvider } from 'react-query'
import {RouterProvider} from 'react-router-dom'

// styles
import './index.css'

//Routes
import router from './Router'
import { ContextComponent } from './context'

// Init react-query
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ContextComponent>
        <RouterProvider router={router}/>
      </ContextComponent>
    </QueryClientProvider>
  </React.StrictMode>,
)
