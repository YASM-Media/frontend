import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const origin = globalThis.window.location.origin;

const authenticationManager = new UserManager({
  authority: "https://auth.yasm.khatrivarun.xyz/realms/YASM%20Media",
  client_id: "sso",
  redirect_uri: `${origin}/auth/signin/callback`,
  post_logout_redirect_uri: `${origin}/auth/signout/callback`,
  userStore: new WebStorageStateStore({
    store: globalThis.window.sessionStorage,
  }),
  monitorSession: true,
});

export default authenticationManager;
