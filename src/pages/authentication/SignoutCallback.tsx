import { onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import authenticationManager from "../../utils/auth_manager.ts";

function SignoutCallback() {
  const navigate = useNavigate();

  onMount(async () => {
    await authenticationManager.signoutCallback();
    navigate("/");
  });

  return (
    <>
      <h1>Logging you out...</h1>
    </>
  );
}

export default SignoutCallback;
