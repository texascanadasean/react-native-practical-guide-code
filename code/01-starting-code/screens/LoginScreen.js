import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import { login } from '../util/auth.js'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Authentication Failed', 'Could not login - check credentials');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating)
  {
    return <LoadingOverlay message="Logging in user..." />
  }


  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
