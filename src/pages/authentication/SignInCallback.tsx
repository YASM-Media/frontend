import { onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import authenticationManager from "../../utils/auth_manager.ts";

function SignInCallback() {
  const navigate = useNavigate();

  onMount(async () => {
    await authenticationManager.signinCallback();
    navigate("/");
  });

  return (
    <>
      <h1>Logging you in...</h1>
    </>
  );
}

export default SignInCallback;
