import { useRef } from "react";
import { withPublic } from "../src/hook/route";

const Signup = ({ auth }: any) => {
  const { createUserWithEmailAndPassword, error } = auth;
  const email = useRef<any>();
  const password = useRef<any>();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email.current.value, password.current.value);
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSignup}>
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <button type="submit">create user</button>
      </form>
    </div>
  );
};

export default withPublic(Signup);
