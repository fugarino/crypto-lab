import { withProtected } from "../src/hook/route";

const Admin = ({ auth }: any) => {
  const { logout } = auth;
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withProtected(Admin);
