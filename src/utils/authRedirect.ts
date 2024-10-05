import { useRouter } from "next/router";
import { Roles } from "/src/constants/roles";

export const handleAuthRedirect = (role: string) => {
  //   const router = useRouter();

  switch (role) {
    case Roles.ADMIN:
      router.push("/admin");
      break;
    case Roles.EDITOR:
      router.push("/editor");
      break;
    case Roles.USER:
      router.push("/user");
      break;
    default:
      router.push("/");
  }
};
