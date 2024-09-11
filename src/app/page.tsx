"use client";
import CompareLines from "@/components/compare-lines";
import DownloadButton from "@/components/download-button";
import FileInput from "@/components/file-input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Page() {
  const [firstFileLines, setFirstFileLines] = useState<string[] | null>(null);
  const [secondFileLines, setSecondFileLines] = useState<string[] | null>(null);
  const [printText, setPrintText] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>File compare</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <FileInput
            label="First file"
            id="first"
            setFileLines={setFirstFileLines}
          />
          <FileInput
            label="Second file"
            id="second"
            setFileLines={setSecondFileLines}
          />
          {firstFileLines && secondFileLines && (
            <CompareLines
              firstFileLines={firstFileLines}
              secondFileLines={secondFileLines}
              setPrintText={setPrintText}
            />
          )}
        </CardContent>
        {firstFileLines && secondFileLines && (
          <CardFooter>
            <DownloadButton printText={printText} className="w-full" />
          </CardFooter>
        )}
      </Card>
    </main>
  );
}
