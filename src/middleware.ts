import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect staff panel with PIN-based session cookie
  if (pathname.startsWith("/guapatlu-staff-panel")) {
    const authCookie = req.cookies.get("guapatlu_staff_auth")?.value;

    if (!authCookie) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin-login";
      return NextResponse.redirect(url);
    }

    console.log("✅ Auth cookie found, allowing access");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
