import { withProtected } from "../src/hook/route";

const Admin = ({ auth }: any) => {
  const { logout, user } = auth;
  return (
    <div>
      <h1>{user.emailVerified ? "Verified" : "not verified"}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withProtected(Admin);
