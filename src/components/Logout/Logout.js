import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as authService from '../../services/authService';

import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/')
            });
    }, [])
}

export default Logout;