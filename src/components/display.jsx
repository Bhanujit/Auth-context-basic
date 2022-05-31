import '../App.css'
import { AuthContext } from '../context/AuthContext'
import {useContext} from 'react'
export const Display = () => {
const {isAuth} =useContext(AuthContext)

    return (<div>
        <h1>Contgratulations You've logged in Succesfully No more pain</h1>
        <h3>Token:- {isAuth}</h3>
    </div>)
}