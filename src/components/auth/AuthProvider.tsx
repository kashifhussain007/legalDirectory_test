// src/components/auth/AuthProvider.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getRefreshToken } from "/src/utils/cookie";

import { refreshTokenRequest } from "../../redux/auth/authActions"; // Import your auth action

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const refreshToken = getRefreshToken();

  const { isAuthenticated, role, authMeLoading } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(refreshTokenRequest(refreshToken)); // Dispatch authMe API to check login status
    }
  }, [dispatch]);

  useEffect(() => {
    if (!authMeLoading) {
      if (!isAuthenticated) {
        // If not authenticated, redirect to login
        router.replace("/");
      }
      //   else if (role) {
      //     // Handle role-based redirection
      //     switch (role) {
      //       case "admin":
      //         router.replace("/admin");
      //         break;
      //       case "user":
      //         router.replace("/user/dashboard");
      //         break;
      //       default:
      //         router.replace("/");
      //     }
      //   }
    }
  }, [isAuthenticated, role, authMeLoading, router]);

  //   Optionally display a loading state while checking auth
  if (authMeLoading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default AuthProvider;
