import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedLayout = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Prevent redirect during loading

    // If no session or not an allowed role, redirect to landing page
    if (!session || !allowedRoles.includes(session.user.role)) {
      router.push("/"); // Redirect to landing page
    }
  }, [session, status, allowedRoles, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Optionally display a loader
  }

  return <>{children}</>; // Render the children if authorized
};

export default ProtectedLayout;
