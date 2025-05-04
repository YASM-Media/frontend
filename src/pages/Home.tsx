import "../App.css";
import { useNavigate } from "@solidjs/router";
import authenticationManager from "../utils/auth_manager.ts";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>YASM Media 🌟</h1>
      <div class="card">
        <button
          on:click={async () => await authenticationManager.signinRedirect()}
        >
          Log In
        </button>
        <button
          on:click={async () => await authenticationManager.signoutRedirect()}
        >
          Log Out
        </button>
        <button on:click={() => navigate("/authenticated")}>
          Visit Authenticated Page
        </button>
      </div>
    </>
  );
}

export default Home;
