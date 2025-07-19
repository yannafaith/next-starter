
import { NextRequest, NextResponse } from "next/server"

export async function GET( request: NextRequest ) {
    const data = { message: "Hello, world!" }
    const uploaderId = request.nextUrl.searchParams.get("creatorId")
    return NextResponse.json({ ...data, uploaderId }, { status: 200 })
}

