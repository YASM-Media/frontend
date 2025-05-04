import type { ParentComponent } from "solid-js";
import { createSignal, onMount, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import authenticationManager from "../utils/auth_manager.ts";

const WithAuthentication: ParentComponent = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = createSignal<boolean>(true);

  onMount(async () => {
    const user = await authenticationManager.getUser();

    if (user != null) {
      setLoading(false);
    } else {
      navigate("/");
    }
  });

  return (
    <>
      <Show when={loading()}>
        <h1>Checking authentication state</h1>
      </Show>
      <Show when={!loading()}>
        {props.children}
      </Show>
    </>
  );
};

export default WithAuthentication;
