"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/useAction";

import { FormInput } from "@/components/form/form-input";

import { FormButton } from "./form-button";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "Success");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    console.log({ title });

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" label="Board Title" errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
