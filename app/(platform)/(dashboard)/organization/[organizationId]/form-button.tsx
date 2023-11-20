import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button size={"sm"} type="submit" className="m-1" disabled={pending}>
      Submit
    </Button>
  );
};
