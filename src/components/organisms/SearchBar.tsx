"use client";

import { useSearchParams, useRouter } from "next/navigation";
import InputWithButtonForm from "../molecules/InputWithButtonForm";
import { useCallback, useMemo } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onConfirm = useCallback((inputValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", inputValue);
    router.push(`?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultValue = useMemo(() => {
    return new URLSearchParams(searchParams.toString()).get("q") || "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputWithButtonForm
      onConfirm={onConfirm}
      buttonLabel="Filter"
      inputDefaultValue={defaultValue}
    />
  );
}
