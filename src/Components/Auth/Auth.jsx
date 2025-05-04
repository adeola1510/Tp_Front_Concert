import {ShopContext} from '../ShopContext/ShopContext'
import { useContext } from 'react'
import LoginForm from '../Auth/LoginForm'

const Auth = () => {
    const {isLogin}= useContext(ShopContext);
        if (!isLogin) {
            return <LoginForm/>
        }else{
            <p>Reservation reussir!</p>
        }
    
}

export default Auth