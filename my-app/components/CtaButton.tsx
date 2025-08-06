import Link from "next/link"
export default function CtaButton({text}: {text: string} ){
    return (
        <button className="text-xs md:text-[16px] text-gray-800 button-bg px-4 md:px-10 py-2 rounded-full h-fit font-semibold hover:bg-[#86BC25] hover:cursor-pointer transition-colors">
            <Link target="_blank" href={"https://app.centerfy.ai/v2/preview/YadZEw2HoLSsxybYdwv9"}>
            {text}
            </Link>
        </button>
    )

}
