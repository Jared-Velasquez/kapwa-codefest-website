// components/CognitoProvider.tsx
'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { AuthProvider } from 'react-oidc-context';
import {
    UserManager,
    WebStorageStateStore,
    type UserManagerSettings,
} from 'oidc-client-ts';

export function CognitoProvider({ children }: { children: React.ReactNode }) {
    // 1) Create the UserManager *only* on the client:
    const userManager = useMemo(() => {
        if (typeof window === 'undefined') {
            return null;
        }

        const settings: UserManagerSettings = {
            authority: process.env.NEXT_PUBLIC_OIDC_CONFIG_AUTHORITY!,
            client_id: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID!,
            // safe to use window here because we’re inside the guard
            redirect_uri: window.location.origin + '/callback',
            response_type: 'code',
            scope: 'openid profile email',

            // override the default localStorage → use sessionStorage
            stateStore: new WebStorageStateStore({
                store: window.sessionStorage,
            }),
            userStore: new WebStorageStateStore({
                store: window.sessionStorage,
            }),
        };

        return new UserManager(settings);
    }, []);

    const cleared = useRef(false);

    useEffect(() => {
        if (cleared.current) return;
        cleared.current = true;
        userManager?.clearStaleState().catch((err) => {
            console.error('Failed to clear stale state', err);
        });
    }, [userManager]);

    // 2) While loading (or on the server), render nothing or a loader
    if (!userManager) {
        return null;
    }

    // 3) Pass your callbacks to <AuthProvider>, not into UserManagerSettings
    return (
        <AuthProvider
            userManager={userManager}
            onSigninCallback={() => {
                window.history.replaceState({}, document.title, '/');
                window.location.replace('/');
            }}
        >
            {children}
        </AuthProvider>
    );
}
