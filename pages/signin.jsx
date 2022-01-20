import Head from 'next/head'

import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../conf/them';
import createEmotionCache from '../createEmotionCache';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const clientSideEmotionCache = createEmotionCache();

export default function Signin(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
              username: event.currentTarget.login.value,
              password: event.currentTarget.password.value
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    return (
        <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>       
        <div>
            <Head>
               <title>Signin page</title> 
            </Head>

            <div>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <fieldset>
                    <legend>Учетные данные для входа в систему</legend>                                     
                    <div>
                        <TextField required id="login" name="login" label="Логин" variant="outlined"/>
                    </div>                    
                    <div>
                        <TextField required type="password"  id="password" name="password" label="Пароль" variant="outlined"/>
                    </div>
                    <Button variant="outlined" type="submit">Войти</Button> 
                    
                    </fieldset>
                </form>
            </div>

        </div>
        </ThemeProvider>
        </CacheProvider>
    )
}