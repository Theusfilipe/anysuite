import {withAuth,NextRequestWithAuth} from "next-auth/middleware";
import { NextResponse } from "next/server";


const levelPriority = {
  NONE: 0,
  READ_ONLY: 1,
  READ_WRITE: 2,
  SUPERVISOR: 3,
  MANAGER: 4,
  ADMIN: 5
};

function hasAccess(
  access: Record<string, keyof typeof levelPriority>,
  department: string,
  minLevel: keyof typeof levelPriority
) {
  const userLevel = access?.[department] ?? "NONE";
  return levelPriority[userLevel] >= levelPriority[minLevel];
}

function isGlobalAdmin(access: Record<string, keyof typeof levelPriority>): boolean {
  const requiredDepartments = ["Maintenance", "Personnel", "Stockroom"];
  return requiredDepartments.every(dept => access?.[dept] === "ADMIN");
}

export default withAuth(
    // `withAuth` augments `Request` with the user's token
    function middleware(req : NextRequestWithAuth) {
        // console.log(request.nextUrl.pathname, request.nextauth.token?.user.role)
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    if (!token) return NextResponse.rewrite(new URL("/denied", req.url));
        //if(req.nextUrl.pathname.startsWith("/adm") && req.nextauth.token?.role !== "adm") {
        //    return NextResponse.rewrite(
        //        new URL("/denied", req.url)

        //    )
        //}
    const access = token.access as Record<string, keyof typeof levelPriority>;

      // Verifica se o usuário é um administrador global se sim, permite acesso a todas as rotas
    if (isGlobalAdmin(access)) {
      return NextResponse.next();
    }
        // Regras por departamento
    if (pathname.startsWith("/maintenance")) {
      if (!hasAccess(access, "Maintenance", "READ_ONLY")) {
        return NextResponse.rewrite(new URL("/denied", req.url));
      }
    }

    if (pathname.startsWith("/personel")) {
      if (!hasAccess(access, "Personnel", "READ_ONLY")) {
        return NextResponse.rewrite(new URL("/denied", req.url));
      }
    }

    if (pathname.startsWith("/stockroom")) {
      if (!hasAccess(access, "Stockroom", "READ_ONLY")) {
        return NextResponse.rewrite(new URL("/denied", req.url));
      }
    }

    // Página de administração proíbe acesso a usuários que não sejam administradores globais
    if (pathname.startsWith("/adm")) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
    },
    {callbacks: {
        authorized: ({ token }) => !!token}
    }
)
    


export const config = { matcher: ["/maintenance/:path*", "/personel/:path*","/stockroom/:path*","/api/:path","/adm/:path*"] }; 