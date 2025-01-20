import { getMenu } from "@/lib/shopify";

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-menu");
  console.log(menu);

  return <nav>nav</nav>;
}
