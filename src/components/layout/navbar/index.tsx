import { getMenu } from "@/lib/shopify";

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-menu");
  return <nav></nav>;
}
