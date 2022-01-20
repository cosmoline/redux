import React from 'react'
import Footer from './footer'
import Header from './header'
import styles from './header.module.scss'

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <main className={styles.main}>
                {children} 
            </main>
            <Footer/>
              
        </div>
    )
}
