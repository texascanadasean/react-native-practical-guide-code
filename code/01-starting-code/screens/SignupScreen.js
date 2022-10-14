import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth.js';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContent);

    async function signUpHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert('Signup Failed', 'Could not create user');
        }
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating User" />;
    }

    return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
