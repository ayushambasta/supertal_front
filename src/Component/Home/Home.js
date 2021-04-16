import { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';

export default function Home() {

    const [user, setUser] = useState();

    useEffect(() => {
        console.log(sessionStorage.getItem('token'));
        //${sessionStorage.getItem('token').token}
        axios.get(`http://localhost:3001/api/user/getuser`, {
            headers: {
              'Authorization': `${sessionStorage.getItem('token')}`
            }
          })
            .then(res => {
                setUser(res.data);
            })
            .catch((err) => alert(err.response.data));
    }, []);

    return (
        <div className="home-body">
            {user ? <h1>{user.name}</h1> : <h1>Hello</h1>}
        </div>
    )
}
