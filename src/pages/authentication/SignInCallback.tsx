import { onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createAuthenticationInfo } from "./../../services/auth.ts";
import authenticationManager from "../../utils/auth_manager.ts";

function SignInCallback() {
  const navigate = useNavigate();

  onMount(async () => {
    await authenticationManager.signinCallback();
    await createAuthenticationInfo();
    navigate("/");
  });

  return (
    <>
      <h1>Logging you in...</h1>
    </>
  );
}

export default SignInCallback;
