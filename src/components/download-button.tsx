import { Button } from "@/components/ui/button";

export default function DownloadButton({
  className,
  printText,
}: {
  className?: string;
  printText: string;
}) {

  function handleClick() {
    const element = document.createElement("a");
    const file = new Blob([printText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "differences.txt";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <Button className={className} onClick={handleClick}>
      Download
    </Button>
  );
}
