import {withAuth,NextRequestWithAuth} from "next-auth/middleware";
import { NextResponse } from "next/server";


export default withAuth(
    // `withAuth` augments `Request` with the user's token
    function middleware(req : NextRequestWithAuth) {
        // console.log(request.nextUrl.pathname, request.nextauth.token?.user.role)
        console.log(req.nextUrl.pathname)
        console.log(req.nextauth.token)

        if(req.nextUrl.pathname.startsWith("/maintenance") && req.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/denied", req.url)

            )
        }
    },
    {callbacks: {
        authorized: ({ token }) => !!token}
    }
)
    


export const config = { matcher: ["/maintenance/:path*", "/personel/:path","/stockroom/:path","/api/:path"] }; 