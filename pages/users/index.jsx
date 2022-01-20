import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from './users.module.scss'
import photo1 from '../../public/user1.jpg'
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from '../../store/slice/userSlice'; 


export default function Users({ data }) {
    const router = useRouter()  
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    
    useEffect(() => {
        if (!users) {      
            dispatch(fetchUsers())
        }

    }, [dispatch])    

    const handleClickUser = (uid) => {
        router.push(`http://localhost:3000/users/${uid}`)
    }

    return (
        <div>
            <Head>
            <title>Users page</title> 
            </Head>
            <p>main users page</p> 

            <div className={styles.box}>
            {!!users && users.map((user) => (
                <div className={styles.tile} key={user.login.username} onClick={() => handleClickUser(user.login.uuid)}>
                    <p>{user.name.first} {user.name.last}
                    {/* <Image src={user.picture.large} width='300' height='300' placeholder='blur'/> */}
                    <IconButton onClick={() => handleClickUser(user.login.uuid)}>
                            <ArrowForward />
                    </IconButton>
                    </p>
                    <img src={user.picture.large}/>
                    
                </div>
            ))}
            </div>            

        </div>
    )
}