import Image from "next/image"

export const ScreenLoading = () => {
    return (
        <div className="screen_loader fixed inset-0 z-[60] grid place-content-center bg-white">
            <Image
                src="/images/loader.gif"
                alt="loader"
                loading="lazy"
                width={600}
                height={600}
                className="w-[600px]"
                style={{ height: "auto" }}
            />
        </div>
    )
}
