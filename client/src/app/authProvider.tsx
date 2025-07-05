import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
    },
    name: {
      order: 5,
      placeholder: "Enter your full name",
      label: "Full Name",
    },
    birthdate: {
      order: 6,
      placeholder: "YYYY-MM-DD",
      label: "Birthdate",
      type: "date",
    },
    gender: {
      order: 7,
      placeholder: "Male or Female",
      label: "Gender",
    },
    picture: {
      order: 4,
      placeholder: "URL to your profile picture",
      label: "Profile Picture",
    },
    phone_number: {
      order: 3,
      placeholder: "123456789",
      label: "Phone Number",
    },
    email: {
      order: 2,
      placeholder: "Enter your email address",
      label: "Email",
      type: "email",
    },
    password: {
      order: 8,
      placeholder: "Enter your password",
      label: "Password",
    },
    confirm_password: {
      order: 9,
      placeholder: "Confirm your password",
      label: "Confirm Password",
    },
  },
};


const AuthProvider = ({ children }: any) => {
  return (
    <div>
      <Authenticator formFields={formFields}>
        {({ user }: any) =>
          user ? (
            <div>{children}</div>
          ) : (
            <div>
              <h1>Please sign in below:</h1>
            </div>
          )
        }
      </Authenticator>
    </div>
  );
};

export default AuthProvider;