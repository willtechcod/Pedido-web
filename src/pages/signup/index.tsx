import { useState, useContext, FormEvent, } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../../styles/Home.module.scss';

import logo from '../../assets/Group.png';

import { Input } from '../../components/ui/Input';
import { Button } from "../../components/ui/Button";

import { AuthContext } from "../../context/AuthContext";

import { toast } from "react-toastify";

import Link from "next/link";
import { Header } from "../../components/Header";

export default function SignUp() {
    const { signUp } = useContext(AuthContext)
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ loading, setLoading ] = useState(false);

    async function handleSignUp(event: FormEvent){
      event.preventDefault();
      if(name === '' || email === '' || password === ''){
        toast.warn('Preencha todos os Campos!');
        return;
      }
      setLoading(true);

      let data = {
        name,
        email,
        password,
      }

      await signUp(data);
      setLoading(false);
    }

  return (
    <>
      <Head>
        <title>Pedido Certo Web - Faça seu cadastro.</title>
      </Head>
      <Header />
      <div className={styles.containerCenter}>

        <div className={styles.login}>
                <h1>Cadastro de usuário</h1>
            <form onSubmit={handleSignUp}>
              <Input
                type='text'
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type='email'
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type='password'
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type='submit'
                loading={loading}
              >
                Cadastrar
              </Button>
            </form>

        </div>

      </div>
    </>
  )
}
