import IconYearBox from '@/components/icons/icon-year-box'
import { IOurStory } from '@/types/product'
import Image from 'next/image'

export default function OurStoryYearCard({ ourStory }: { ourStory: IOurStory }) {
    return (
        <div className="relative flex flex-col px-5 xl:px-12 h-full">
            <Image
                src="/images/about-shadow.png"
                alt="shadow"
                className="story-active-shadow absolute bottom-[52px] left-1/2 hidden h-24 w-full -translate-x-1/2 md:h-[205px]"
                width={568}
                height={205}
            />
            <div className="mb-10 flex grow flex-col text-center relative">
                <p className="mb-5 line-clamp-5 grow text-gray lg:mb-9 lg:text-lg/[26px]">
                   {ourStory?.description}
                </p>
                <h3 className="font-roboto text-lg lg:text-[22px]/[26px] font-medium italic">
                   {ourStory?.name}
                </h3>
            </div>
            <div className="year-box relative">
                <IconYearBox className="mx-auto w-20 text-bleach-100 lg:w-32" />
                <div className="year-text absolute bottom-10 left-1/2 z-50 -translate-x-1/2 -rotate-[30deg] skew-x-[27deg] font-bold text-black lg:text-[22px]/[26px]">
                    {ourStory?.year}
                </div>
            </div>
        </div>
    )
}
