import { useRef } from "react";
import { withProtected } from "../src/hook/route";

const Admin = ({ auth }: any) => {
  const { logout, user, deleteAccount, updatePassword } = auth;

  const password = useRef<any>();
  const confirmPassword = useRef<any>();

  const handleUpdatePassword = async (e: any) => {
    e.preventDefault();
    await updatePassword(password.current.value, confirmPassword.current.value);
  };

  return (
    <div>
      <h1>{user.emailVerified ? "Verified" : "not verified"}</h1>
      <button onClick={logout}>Logout</button>
      <button onClick={deleteAccount}>delete account</button>

      <form onSubmit={handleUpdatePassword}>
        <input type="password" ref={password} />
        <input type="password" ref={confirmPassword} />
        <button type="submit">update password</button>
      </form>
    </div>
  );
};

export default withProtected(Admin);
