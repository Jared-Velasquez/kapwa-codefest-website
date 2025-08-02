// components/CognitoProvider.tsx
"use client";

import React, { useMemo } from "react";
import { AuthProvider } from "react-oidc-context";
import {
  UserManager,
  WebStorageStateStore,
  type UserManagerSettings
} from "oidc-client-ts";

export function CognitoProvider({ children }: { children: React.ReactNode }) {
  // 1) Create the UserManager *only* on the client:
  const userManager = useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const settings: UserManagerSettings = {
      authority: process.env.NEXT_PUBLIC_OIDC_CONFIG_AUTHORITY!,
      client_id: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID!,
      // safe to use window here because we’re inside the guard
      redirect_uri: window.location.origin + "/callback",
      response_type: "code",
      scope: "openid profile email",

      // override the default localStorage → use sessionStorage
      stateStore: new WebStorageStateStore({ store: window.sessionStorage }),
      userStore: new WebStorageStateStore({ store: window.sessionStorage }),
    };

    return new UserManager(settings);
  }, []);

  // 2) While loading (or on the server), render nothing or a loader
  if (!userManager) {
    return null;
  }

  // 3) Pass your callbacks to <AuthProvider>, not into UserManagerSettings
  return (
    <AuthProvider
      userManager={userManager}
      onSigninCallback={() => {
        // strip off ?code=…&state=… so reloads cannot re-process
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }}
    //   onSigninError={(err) => {
    //     console.error("OIDC signin error:", err);
    //     if (/No matching state/.test(err.message)) {
    //       // optional: clear URL and restart login flow
    //       window.history.replaceState(
    //         {},
    //         document.title,
    //         window.location.pathname
    //       );
    //       userManager.signinRedirect();
    //     }
    //   }}
    >
      {children}
    </AuthProvider>
  );
}
