import { NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

/** Proxy compliance PDF from backend (Cloudinary signed fetch on server). */
export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug");
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ message: "Invalid slug" }, { status: 400 });
  }

  try {
    const pdfRes = await fetch(
      `${API_BASE}/compliance/${encodeURIComponent(slug)}/pdf`,
      { cache: "no-store" }
    );

    if (!pdfRes.ok) {
      const errText = await pdfRes.text().catch(() => "");
      return NextResponse.json(
        { message: errText || "Failed to load PDF" },
        { status: pdfRes.status }
      );
    }

    const buffer = await pdfRes.arrayBuffer();
    if (buffer.byteLength < 100) {
      return NextResponse.json({ message: "PDF file is empty" }, { status: 502 });
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch {
    return NextResponse.json({ message: "PDF proxy error" }, { status: 500 });
  }
}
