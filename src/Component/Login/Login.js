import { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import { ReactComponent as ReactLogoLogin } from "../../assets/undraw_Web_developer_re_h7ie.svg";
import { ReactComponent as ReactLogoRegister } from "../../assets/undraw_personal_information_re_vw8a.svg";

export default function Login({ setHome }) {
    const [isRegistered, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onLogin = () => {
        const params = {
            "email": email,
            "password": password
        }
        axios.post(`http://localhost:3001/api/user/login`, {

            ...params
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        })
            .then(res => {
                if(res){
                    console.log(res.data);
                    sessionStorage.setItem("token", res.data.token);
                    sessionStorage.setItem("id", res.data.id);
                    setHome(true);
                }
            })
            .catch();
    }

    const onRegister = () => {
        const params = {
            "name": name,
            "email": email,
            "password": password
        }
        axios.post(`http://localhost:3001/api/user/register`, {

            ...params
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        })
            .then(res => {
                console.log("token", res.data);
                if (res.data) {
                    setIsRegister(true);
                }
            }).catch((err) => console.log(err));
    }

    return (
        <>
            {
                isRegistered ?
                    <div className="login">
                        <div className="login-left">
                            <input type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <button className="btn-login" onClick={onLogin}>Login</button>
                            <div className="btn-label-div">
                                New User?
                                <button className="btn-label" onClick={() => setIsRegister(false)}>Register</button>
                            </div>

                        </div>
                        <div className="login-right">
                            <ReactLogoLogin />
                        </div>
                    </div>
                    :
                    <div className="register">
                        <div className="login-left">
                            <input type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <input type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <button className="btn-register" onClick={onRegister}>Register</button>
                            <div className="btn-label-div">
                                Already Signed Up?
                                <button className="btn-label" onClick={() => setIsRegister(true)}>Login</button>
                            </div>
                        </div>
                        <div className="login-right">
                            <ReactLogoRegister />
                        </div>
                    </div>
            }

        </>
    )
}
