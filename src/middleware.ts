import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Some browsers keep using `/favicon.ico` from cache even if we only set
    // `favicon.png`. Redirect it to the cache-busted PNG.
    if (pathname === "/favicon.ico") {
        const url = new URL("/favicon.png?v=3", request.url);
        return NextResponse.redirect(url, 302);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/favicon.ico"],
};

