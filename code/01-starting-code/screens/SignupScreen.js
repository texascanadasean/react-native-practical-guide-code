import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser} from '../util/auth.js'
import LoadingOverlay from '../components/ui/LoadingOverlay'

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert('Signup Failed', 'Could not create user');

    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating)
  {
    return <LoadingOverlay message="Creating User" />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
