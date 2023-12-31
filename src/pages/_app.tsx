import React from 'react';
import '../../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from "next/app";

import { AuthProvide } from '../context/AuthContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvide>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000}/>
    </AuthProvide> 
  )
}
