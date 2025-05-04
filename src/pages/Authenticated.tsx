import WithAuthentication from "../components/WithAuthentication.tsx";
import authenticationManager from "./../utils/auth_manager.ts";

function Authenticated() {
  const calloutBackend = async () => {
    const bearerToken = (await authenticationManager.getUser())?.access_token;
    const response = await fetch("http://localhost:9080/", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
      },
    });

    console.log(await response.text());
  };

  return (
    <WithAuthentication>
      <h1>You are authenticated</h1>
      <button on:click={calloutBackend}>Hit Backend</button>
    </WithAuthentication>
  );
}

export default Authenticated;
