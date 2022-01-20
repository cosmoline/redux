import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, fetchUsers, updateUserName } from '../../store/slice/userSlice';


export default function User() {
    const [userName, setUserName] = React.useState('')
    const router = useRouter()
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    const { uid } = router.query


    React.useEffect(() => {
        if (!users) dispatch(fetchUsers())
    }, [])

    if(!users) return null;

    const user = users.find(user => user.login.uuid === uid)

    const { name, login, email, phone} = user

    

    return (
            <Card>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {name.first} {name.last}
                </Typography>       
             
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 3, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                
                    <TextField defaultValue={name.first} onChange={event => setUserName(event.target.value)} label="First Name" variant="outlined" />
                    <TextField defaultValue={name.last} label="Last Name" variant="outlined" disabled />
                    <TextField defaultValue={login.username} label="Login" variant="outlined" disabled />
                    <TextField defaultValue={email} label="Email" variant="outlined" disabled />
                    <TextField defaultValue={phone} label="Phone" variant="outlined" disabled />

                
                    <Button onClick={() => dispatch(updateUserName({uid, name: userName}))}>Submit</Button>
            </Box>
            </Card>
    )
}
