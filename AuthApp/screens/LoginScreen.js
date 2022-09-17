import { useContext, useState } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { signInUser } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function login({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await signInUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication Failed!", "Could not log you in.");
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin in..." />;
  }

  return <AuthContent isLogin onAuthenticate={login} />;
}

export default LoginScreen;
