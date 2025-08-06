export default function SectionInfo({text}: {text: string}){
    return (
    <div className="mx-auto rounded-full bg-[#bada55]/20 w-fit px-4 py-2 flex gap-2">
            <div className="flex items-center gap-0.5">
                <div className="w-4 h-4 rounded-full button-bg"></div>
                <div className="w-3.5 h-4 rounded-e-full bg-green-900"></div>
            </div>
           <p className="text-green-900 text-sm">
                {text}
            </p>
            <div className="flex items-center gap-0.5">
                <div className="w-3.5 h-4 rounded-e-full bg-green-900 rotate-180"></div>
                <div className="w-4 h-4 rounded-full button-bg"></div>
            </div>
    </div>
    )
    
}
