"use client";

import { FC, FormEvent, useState } from "react";
import { toast } from "./ui/toast";

const RequestApiKey: FC = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCreating(true);
    try {
      const generatedApiKey = await createAoiKey();
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: "Error",
          message: err.message,
          type: "error",
        });

        return;
      }

      toast({
        title: "Error",
        message: "Something went wrong",
        type: "error",
      });
    }
    setIsCreating(false);
  };

  return <div>RequestApiKey</div>;
};

export default RequestApiKey;
function createAoiKey() {
  throw new Error("Function not implemented.");
}
