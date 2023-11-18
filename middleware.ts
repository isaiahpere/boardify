import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  // Allowed routes with no authentication
  publicRoutes: ["/"],

  /* --- AFTER AUTH MIDDLEWARE --- */
  afterAuth(auth, req) {
    // if user is auth and in public route, redirect to select org
    // or if orgId redirect to org selection
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    // if user not auth, redirect to sign in
    // once signed in send them to private route they tried to access
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // if user is auth and has orgId, but not in org selection then send to select-org page
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
