import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
  
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
