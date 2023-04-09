import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useIonRouter } from "@ionic/react";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

type Inputs = {
  username: string,
  password: string,
};
const Login = () => {
  const router = useIonRouter();
  const { route } = useAuthenticator((context) => [context.route]);
  const [message, setMessage] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setMessage("Logging in...");
  }

  useEffect(() => {
    if (route === 'authenticated') {
      router.push('/');
    }
  }, [route]);

  return (
    <div>
      <Authenticator></Authenticator>
    </div>
  )
}

export default Login