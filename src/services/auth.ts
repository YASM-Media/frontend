import authenticationManager from "./../utils/auth_manager.ts";

export const createAuthenticationInfo = async () => {
  // Fetch Bearer Token for the currently logged in user
  const bearerToken = (await authenticationManager.getUser())?.access_token;

  // Send request to the backend to create required
  // authentication info for the user
  const response = await fetch("http://localhost:9080/auth", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${bearerToken}`,
    },
  });

  // If request has failed, throw an error
  if (!response.ok) {
    throw new Error(
      `Error sending authentication info to the backend: ${response.text}`,
    );
  }

  // Return response data
  return await response.json();
};
