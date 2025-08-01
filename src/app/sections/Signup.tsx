"use client";
import InteractiveButton from '@/app/components/InteractiveButton';
import { useAuth } from 'react-oidc-context';
import ProfileTab from '../components/Profile';

export default function Signup() {
    const auth = useAuth();
    return(
        <div className="items-center flex flex-col h-[100vh]">
            <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">Give a Helping Hand </h1>
            <ProfileTab authToken={auth.user?.access_token || ""} isSignedIn={auth.isAuthenticated} />
        </div>
    )
}