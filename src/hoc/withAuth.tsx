"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { authMeRequest } from "../redux/auth/authActions"; // action for authMe
import { RootState } from "../redux/store";

const withAuth = (WrappedComponent: any, allowedRoles: string[]) => {
  const AuthWrapper = (props: any) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated, role, loading } = useSelector(
      (state: RootState) => state.auth
    );

    useEffect(() => {
      if (!isAuthenticated) {
        dispatch(authMeRequest());
      }
    }, [isAuthenticated, dispatch]);

    useEffect(() => {
      if (!loading && role && !allowedRoles.includes(role)) {
        router.push("/unauthorized"); // Redirect unauthorized users
      }
    }, [role, loading, router]);

    if (!isAuthenticated || loading) {
      return <div>Loading...</div>; // You can replace this with a loader
    }

    return <WrappedComponent {...props} />;
  };

  // Assign a display name for better debugging
  AuthWrapper.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthWrapper;
};

export default withAuth;
