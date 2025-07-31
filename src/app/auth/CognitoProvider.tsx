"use client";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: process.env.NEXT_PUBLIC_OIDC_CONFIG_AUTHORITY!,
    client_id: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID!,
    redirect_uri: typeof window !== "undefined" ? window.location.origin + "/callback": "",
    response_type: "code",
    scope: "openid profile email",
}

console.log("Cognito Auth Config:", cognitoAuthConfig);
export function CognitoProvider({ children }: { children: React.ReactNode }) {
    return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>
}