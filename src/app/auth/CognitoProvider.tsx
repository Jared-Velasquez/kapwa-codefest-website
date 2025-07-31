"use client";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: process.env.OIDC_CONFIG_AUTHORITY,
    client_id: process.env.COGNITO_APP_CLIENT_ID,
    redirect_uri: typeof window !== "undefined" ? window.location.origin: "",
    response_type: "code",
    scope: "openid profile email",
}

export function CognitoProvider({ children }: { children: React.ReactNode }) {
    return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>
}