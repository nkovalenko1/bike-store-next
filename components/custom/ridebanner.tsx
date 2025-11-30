import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function RideBanner() {
    return (
        <div className="relative bg-gradient-to-r from-bleach-200 to-purple">
            <Image
                src="/images/gras.png"
                alt="Gras"
                className="absolute inset-x-0 bottom-0 h-10 w-full sm:h-auto xl:h-[130px]"
                width={1920}
                height={130}
            />
            <div className="container relative flex items-end justify-between md:items-center md:gap-5">
                <div className="relative py-10">
                    <div className="mb-[30px]">
                        <h2 className="mb-1.5 text-2xl font-bold md:mb-3 md:text-5xl/[60px] lg:text-6xl/[70px] xl:text-[70px]/[84px]">
                            Let’s take a&nbsp;
                            <span className="font-roboto font-medium italic">
                                ride
                            </span>
                        </h2>
                        <p className="text-gray lg:text-xl/6">
                            Your journey to the genuine begins here.
                        </p>
                    </div>
                    <Link href="/contact-us">
                        <Button type="button">Discover more</Button>
                    </Link>
                </div>
                <div className="absolute bottom-0 right-6 -mb-5 sm:static md:-mb-11 lg:-mb-[59px]">
                    <Image
                        src="/images/cycle-ride.png"
                        alt="Cycle ride"
                        className="w-32 sm:w-40 md:w-80 lg:w-[450px]"
                        width={450}
                        height={450}
                    />
                </div>
            </div>
        </div>
    )
}
