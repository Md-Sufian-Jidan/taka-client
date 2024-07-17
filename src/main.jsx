import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Contexts/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
