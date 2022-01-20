import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './header.module.scss'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../../../conf/them';
import createEmotionCache from '../../../createEmotionCache';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const clientSideEmotionCache = createEmotionCache();

export default function Header(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const router = useRouter()

    const handleClick = () => {
        console.log(router);
        router.push('/users/user1')
    }



    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <header className={styles.header}>


                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>
                            <Link href="/"> 
                                <a>Домой</a>
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/users">
                                <a>Пользователи</a>
                            </Link> 
                        </Button>
                        <Button>
                            <Link href="signin">
                                <a>Вход</a>
                            </Link>       
                        </Button>
                        <Button>
                            <Link href="registration">
                                <a>Регистрация</a>
                            </Link>                         
                        </Button>
                    </ButtonGroup> 

                </header>
            </ThemeProvider>
        </CacheProvider>
    )
}
