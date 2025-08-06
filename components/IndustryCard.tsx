export default function IndustryCard({ text, desc, bool, type }: { text: string, desc: string, bool: boolean, type: string }) {
    return (
        <div className="ribbon bg-gray-800 text-white w-40 h-40 flex flex-col items-center pt-8 rounded-2xl relative">
            <div className={`${bool ? "text-white bg-green-700" : "text-gray-900 button-bg"} w-12 h-12 flex items-center justify-center rounded-full mb-2`}>
               {text} 
            </div>
            <p className="font-semibold text-sm text-white">{desc}</p>
            <p className="text-gray-400 text-xs">{type}</p>
        </div>
    );
}
