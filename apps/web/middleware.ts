import {withAuth,NextRequestWithAuth} from "next-auth/middleware";



export default withAuth(
    // `withAuth` augments `Request` with the user's token
    function middleware(req : NextRequestWithAuth) {
        // console.log(request.nextUrl.pathname, request.nextauth.token?.user.role)
        console.log(req.nextUrl.pathname)
        console.log(req.nextauth.token)
    },
    {callbacks: {
        authorized: ({ token }) => {
            if (token?.role === "admin") return true;
                return false;
            },
        
    }}
    
)
    


export const config = { matcher: ["/maintenance/:path*", "/personel/:path","/stockroom/:path","/api/:path"] }; 