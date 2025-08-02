"use client";

import { FormEvent, memo } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type InputWithButtonFormProps = {
  onConfirm: (val: string) => void;
  buttonLabel: string;
  inputDefaultValue: string;
};

function InputWithButtonForm({
  onConfirm,
  buttonLabel,
  inputDefaultValue,
}: InputWithButtonFormProps) {
  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const query = (e.currentTarget.firstChild as HTMLInputElement)?.value || "";
    onConfirm(query);
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-row w-[100%] gap-4">
      <Input defaultValue={inputDefaultValue} className="w-2xs" />
      <Button text={buttonLabel} />
    </form>
  );
}

export default memo(InputWithButtonForm);
