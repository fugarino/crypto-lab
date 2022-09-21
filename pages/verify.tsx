import { useRouter } from "next/router";

const Verify = () => {
  const router = useRouter();

  const { email } = router.query;

  return (
    <div>
      <h1>Please check your email: {email}</h1>
    </div>
  );
};

export default Verify;
