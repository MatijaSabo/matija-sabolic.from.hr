import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get("x-vercel-reval-key");
    const tag = requestHeaders.get("x-vercel-reval-tag");

    if (!tag || !secret) {
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
