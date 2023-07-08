import { useContext, FormEvent, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/Home.module.scss';

import logo from '../assets/logoimg.svg';

import { Input } from '../components/ui/Input';
import { Button } from "../components/ui/Button";

import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';

import Link from "next/link";

import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {
  const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent){
      event.preventDefault();

      if(email ==='' || password ===''){
        toast.warn('Preencha todos os campos!');
        return;
      }

      setLoading(true);

      let data = {
        email,
        password,
      }

      await signIn(data);
      setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Pedido Certo Web - Faça seu login.</title>
      </Head>
      <div className={styles.containerCenter}>
          <Image className={styles.logo} src={logo} alt="logo do sistema" />
        
        <div className={styles.login}>

            <form onSubmit={handleLogin}>
              <Input
                type='email'
                placeholder="Digite seu e-mail"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
              />

              <Input
                type='password'
                placeholder="Digite sua senha"
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
              />

              <Button
                type='submit'
                loading={loading}
              >
                Entrar
              </Button>
            </form>

        </div>

      </div>
    </>
  )
}


export const getServersideProps = canSSRGuest(async (ctx) => {
  return{
    props: {}
  }
})