import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import { login } from '../util/auth.js'
import LoadingOverlay from '../components/ui/LoadingOverlay'

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating)
  {
    return <LoadingOverlay message="Logging in user..." />
  }


  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
