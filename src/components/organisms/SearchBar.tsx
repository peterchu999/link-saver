"use client";

import { useRef } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement>(null);

  function updateQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.push(`?${params.toString()}`);
  }

  function onButtonClick() {
    const query = searchInputRef.current?.value || "";
    updateQueryString("q", query);
  }

  return (
    <div className="flex flex-row w-[100%] gap-4">
      <Input ref={searchInputRef} className="w-2xs" />
      <Button onClick={onButtonClick} text="Filter" />
    </div>
  );
}
