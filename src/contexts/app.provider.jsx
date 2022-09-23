import React from "react";
import { AuthProvider } from "./auth.provider";
import { CatalogProvider } from "./catalog.provider";
import { PostProvider } from "./post.provider";
import { UserProvider } from "./user.provider";

const combineComponents = (...components) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const providers = [AuthProvider, CatalogProvider, PostProvider, UserProvider];

export const AppContextProvider = combineComponents(...providers);
