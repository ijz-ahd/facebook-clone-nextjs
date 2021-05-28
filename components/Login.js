import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-3 pl-5 pr-5 bg-gray-200 rounded-full text-gray-800 text-center cursor-pointer"
      >
        Login with google
      </h1>
    </div>
  );
}

export default Login;
