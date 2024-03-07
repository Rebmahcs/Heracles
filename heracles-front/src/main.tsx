import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./core/routing/AppRouter.tsx";
import AuthProvider from "./core/auth/AuthProvider.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
  </React.StrictMode>,
)
