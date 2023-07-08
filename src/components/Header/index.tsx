import { useContext } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { FiLogOut } from 'react-icons/fi';
import chef from '../../assets/logoimg.svg';

import { AuthContext } from '../../context/AuthContext';

export function Header(){

    const { signOut } = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard'>
                    <Image src={chef} alt='aaaa' width={220} height={60} />
                </Link>
                 

                    <nav className={styles.menuNav}>

                        <Link href='/dashboard'>
                            <p>Pedidos</p>
                        </Link>
                        <Link href='/category'>
                            <p>Cadastrar categoria</p>
                        </Link>

                        <Link href='/product'>
                            <p>Cadastrar produto</p>
                        </Link>

                        <Link href='/signup'>
                            <p>Cadastrar usuário</p>
                        </Link>

                        <button onClick={signOut}>
                            <FiLogOut color='#FFF' size={24}/>
                        </button>

                    </nav>

            </div>
        </header>
    )
}