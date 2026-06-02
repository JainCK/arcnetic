// app/api/config/route.ts
import { NextResponse } from "next/server";
import { serverConfig } from "@/lib/config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Only return safe, public information
    const publicConfig = {
      social: serverConfig.social,
      site: {
        publicUrl: serverConfig.site.publicUrl,
      },
      // Only expose what's safe for public consumption
      contact: {
        email: serverConfig.contact.email, // This is already public on your contact form
        phone: serverConfig.contact.phone, // This is already public on your contact form
      },
    };

    return NextResponse.json(publicConfig);
  } catch (error: any) {
    console.error("CRITICAL ERROR IN /api/config:", error);
    return NextResponse.json(
      { error: error.message || String(error), stack: error.stack },
      { status: 500 }
    );
  }
}
