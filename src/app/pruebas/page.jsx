import { getSession } from "next-auth/react";


async function getData(context) {
  const session = await getSession(context);

  if (!session) {
    // Redirect or handle unauthenticated user
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    hola: "123",
    session
  };
}

export default async function Page() {
  const data = await getData();

  return <main>{JSON.stringify(data.session)}</main>;
}
