import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        const user2 = { id: "2", name: "J Smith", email: "jsmith@example.com" };
        const getUser = async () => {
          try {
            const response = await axios.post(
              "http://localhost:5000/login/login",
              {
                data: {
                  Email: credentials.email,
                  Password: credentials.password,
                },
              }
            );
            return response.data;
          } catch (error) {
            console.error("Error al hacer login:", error);
            return { error: "Hubo un error al hacer login" };
          }
        };

        return await getUser();
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token, user }) {
      // Return a cookie value as part of the session
      // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`

      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
