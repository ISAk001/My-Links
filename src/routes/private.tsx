import { ReactNode, useState, useEffect } from 'react';
import { auth } from '../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
    const [loading, setaLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }

                localStorage.setItem('@reactlinks', JSON.stringify(userData))
                setaLoading(false);
                setSigned(true);

            } else {
                setaLoading(false);
                setSigned(false);
            }
        })


        return () => {
            unsub();
        }

    }, [])

    if (loading) {
        return <div></div>
    }

    if (!signed) {
        return <Navigate to='/login' />
    }

    return children;

}