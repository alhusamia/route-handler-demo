import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeader = new Headers(request.headers);
  // console.log(requestHeader.get("Authorization"));

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  return new Response("<h1>Profile api data<h1/>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
