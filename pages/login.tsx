import { useRef } from "react";
import { withPublic } from "../src/hook/route";

const Login = ({ auth }: any) => {
  const { loginWithGoogle, error, signInUserWithEmailAndPassword, resetPassword }: any = auth;

  const email = useRef<any>();
  const password = useRef<any>();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signInUserWithEmailAndPassword(email.current.value, password.current.value);
  };

  return (
    <div>
      <h1>Sign in with email and password</h1>
      <form onSubmit={handleLogin}>
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <button type="submit">login</button>
      </form>
      <button onClick={async () => await resetPassword(email.current.value)}>
        Forget Password
      </button>
      <h1>Sign in with google</h1>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
    </div>
  );
};

export default withPublic(Login);
