"use client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FileInput({
  label,
  id,
  setFileLines,
}: {
  label: string;
  id: string;
  setFileLines: Dispatch<SetStateAction<string[] | null>>;
}) {
  function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const fileReader = new FileReader();

      fileReader.readAsText(e.target.files[0]);

      fileReader.addEventListener("load", () => {
        if (e.target.files && e.target.files[0].name.includes(".csv")) {
          setFileLines(String(fileReader.result).split(","));
        } else {
          setFileLines(String(fileReader.result).split("\r\n").filter((line) => line !== ""));
        }
      });
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}:</Label>
      <Input
        className="h-full file:border-none file:cursor-pointer file:h-10 file:px-4 file:py-2 file:inline-flex file:items-center file:justify-center file:whitespace-nowrap file:rounded-md file:bg-primary file:text-sm file:font-medium file:text-primary-foreground file:ring-offset-background file:transition-colors file:hover:bg-primary/90 file:focus-visible:outline-none file:focus-visible:ring-2 file:focus-visible:ring-ring file:focus-visible:ring-offset-2 file:disabled:pointer-events-none file:disabled:opacity-50"
        id={id}
        type="file"
        onChange={handleUpload}
      />
    </div>
  );
}
