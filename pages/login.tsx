import { withPublic } from "../src/hook/route";

const Login = ({ auth }: any) => {
  const { user, loginWithGoogle, error }: any = auth;
  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.displayName}</h1>
      {user && (
        <picture>
          <img src={user?.photoURL} referrerPolicy="no-referrer" alt="profile picture" />
        </picture>
      )}
    </div>
  );
};

export default withPublic(Login);
