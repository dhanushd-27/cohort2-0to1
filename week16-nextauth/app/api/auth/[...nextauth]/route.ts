import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials?.username);
                console.log(credentials?.password);
                return {
                    username: "harkirat",
                    id: "1",
                    email: "harkirat@gmail.com"
                }
            },
          }),
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST }