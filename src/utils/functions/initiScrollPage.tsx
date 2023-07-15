export default function initiScrollPage() {
  if (typeof window === "object") {
    console.log("oi");
  }
}
const isBrowser = () => typeof window !== "undefined";

if (isBrowser()) {
  window.addEventListener("wheel", initiScrollPage);
}
