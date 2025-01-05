"use client";
import Link from "next/link";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className=" fixed top-0 left-0 z-50 w-full border-b bg-[#213555] text-black backdrop-blur"
    >
      <div className="p-6 text-center text-sm">
      <ul className="flex justify-center gap-7 text-[#D8C4B6]">
        <li >
          <Link href={"/"}>Home</Link>
          
        </li>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </ul>
      </div>
    </div>
  );
}
