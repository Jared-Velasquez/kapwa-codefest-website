"use client";

import { AuthProvider } from "react-oidc-context";

export const COGNITO_AUTH_CONFIG = {
    authority: process.env.NEXT_PUBLIC_OIDC_CONFIG_AUTHORITY!,
    client_id: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID!,
    redirect_uri: typeof window !== "undefined" ? window.location.origin + "/callback" : "",
    response_type: "code",
    scope: "openid profile email",
}

console.log("Cognito Auth Config:", COGNITO_AUTH_CONFIG);
export function CognitoProvider({ children }: { children: React.ReactNode }) {
    return <AuthProvider {...COGNITO_AUTH_CONFIG}>{children}</AuthProvider>
}