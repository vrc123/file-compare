import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CompareLines({
  firstFileLines,
  secondFileLines,
  setPrintText,
}: {
  firstFileLines: string[];
  secondFileLines: string[];
  setPrintText: Dispatch<SetStateAction<string>>;
}) {
  const [lineNumber, setLineNumber] = useState(0);

  function handleClickNext() {
    setLineNumber(lineNumber + 1);
  }

  function handleClickPrevious() {
    setLineNumber(lineNumber - 1);
  }

  useEffect(() => {
    let text = "";

    firstFileLines.forEach((line, index) => {
      if (line !== secondFileLines[index]) {
        text =
          text +
          `Line ${index + 1}: The lines are different, word count (first file text): ${firstFileLines[index].split(" ").length}, word count (second file text): ${secondFileLines[index].split(" ").length}\r\n`;
      } else {
        text =
          text +
          `Line ${index + 1}: The lines are the same, word count (first file text): ${firstFileLines[index].split(" ").length}, word count (second file text): ${secondFileLines[index].split(" ").length}\r\n`;
      }
    });

    setPrintText(text);
  }, [firstFileLines, secondFileLines]);

  return (
    <div className="my-4 flex flex-col gap-4 border-b border-t py-4">
      <h4>Compare</h4>
      <p>First file text:</p>
      <div className="flex items-center justify-between">
        <p className="muted">{firstFileLines[lineNumber]}</p>
        <p className="muted">
          Word count: {firstFileLines[lineNumber].split(" ").length}
        </p>
      </div>
      <p>Second file text:</p>
      <div className="flex items-center justify-between">
        <p className="muted">{secondFileLines[lineNumber]}</p>
        <p className="muted">
          Word count: {secondFileLines[lineNumber].split(" ").length}
        </p>
      </div>
      {firstFileLines[lineNumber] === secondFileLines[lineNumber] ? (
        <p className="flex w-full justify-center bg-green-500 px-1 font-bold">
          The lines are the same
        </p>
      ) : (
        <p className="flex w-full justify-center bg-destructive px-1 font-bold">
          The lines are different
        </p>
      )}
      <div className="flex items-center justify-center gap-4">
        <Button
          size="icon"
          onClick={handleClickPrevious}
          disabled={lineNumber === 0}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <p>
          {lineNumber + 1} / {firstFileLines.length}
        </p>
        <Button
          size="icon"
          onClick={handleClickNext}
          disabled={lineNumber === firstFileLines.length - 1}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
