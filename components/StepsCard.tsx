import { RotateCcw, Database, Star, FileText } from "lucide-react";

export default function StepsCard({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: number;
}) {
  const logos = ["Clipboard", "Star", "Stack", "Cycle"];
  const logo = logos[number - 1];
  return (
    <div className="font-main bg-gray-100 hover:bg-[#bada55] border-2 border-gray-800 rounded-2xl p-6 space-y-4 w-full max-w-[240px] lg:max-w-[200px] h-fit flex flex-col relative hover:shadow-lg z-0 shadow-black/30 transition-all duration-300 border-b-8 border-b-gray-800">
      <div className="flex justify-center">
        <div className="p-3 border-2 border-gray-800 bg-white rounded-2xl">
          {logo == "Clipboard" && (
            <FileText className="w-6 h-6 text-gray-700" />
          )}
          {logo == "Star" && <Star className="w-6 h-6 text-gray-700" />}
          {logo == "Stack" && <Database className="w-6 h-6 text-gray-700" />}
          {logo == "Cycle" && <RotateCcw className="w-6 h-6 text-gray-700" />}
        </div>
      </div>

      <h1 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h1>
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-4 left-4">
        <span className="text-2xl font-bold text-gray-800">{number}</span>
      </div>
    </div>
  );
}
