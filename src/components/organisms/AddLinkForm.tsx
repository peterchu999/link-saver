"use client";

import { useCallback, useEffect } from "react";
import InputWithButtonForm from "../molecules/InputWithButtonForm";
import LinkCard from "../molecules/LinkCard";
import { useMutation } from "@tanstack/react-query";

import { LinkModel } from "@/types/model/link";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

export default function AddLinkForm() {
  const router = useRouter();

  const previewMutation = useMutation({
    mutationFn: async (url: string): Promise<LinkModel> => {
      const res = await fetch(`/api/links`, {
        method: "POST",
        body: JSON.stringify({ event: "preview", url: url }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Request failed");
      }

      return res.json();
    },
  });

  const addToCollectionMutation = useMutation({
    mutationFn: async (link: LinkModel | undefined): Promise<LinkModel> => {
      const res = await fetch(`/api/links`, {
        method: "POST",
        body: JSON.stringify({ event: "add", link }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Request failed");
      }

      return res.json();
    },
  });

  useEffect(() => {
    if (addToCollectionMutation.data) {
      router.push("/");
    }
  }, [addToCollectionMutation.data, router]);

  const onConfirm = useCallback((url: string) => {
    previewMutation.mutate(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddToCollectionClick = () => {
    addToCollectionMutation.mutate(previewMutation.data);
  };

  if (addToCollectionMutation.isPending) {
    return <h2>Adding your link to collection ⏳...</h2>;
  }

  return (
    <>
      <InputWithButtonForm
        onConfirm={onConfirm}
        buttonLabel="Preview"
        inputDefaultValue=""
      />
      {previewMutation.isPending ? (
        <h2>loading preview...</h2>
      ) : previewMutation.isError ? (
        <h2>failed to fetch preview, error {previewMutation.error.message}</h2>
      ) : (
        previewMutation.data != undefined && (
          <>
            <LinkCard
              title={previewMutation.data.title}
              url={previewMutation.data.url}
              description={previewMutation.data.description}
              favicon={previewMutation.data.favicon}
              id={previewMutation.data.id}
            />
            {addToCollectionMutation.isError && (
              <h2 className="text-red-500">Fail to add links</h2>
            )}
            <Button onClick={onAddToCollectionClick} text="Add To Collection" />
          </>
        )
      )}
    </>
  );
}
