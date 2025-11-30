import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10 text-center font-aeonik">
            <div className="mb-5 lg:mb-[50px]">
                <div className="mx-auto mb-3 max-w-lg lg:max-w-3xl xl:max-w-[1000px]">
                    <Image
                        src="/images/404.svg"
                        alt="404"
                        width={450}
                        height={296}
                        className="h-full w-full"
                    />
                </div>
                <p className="font-roboto text-xl font-medium italic text-gray lg:text-3xl">
                    Something went wrong
                </p>
            </div>
            <Link href="/">
                <Button type="button" className='uppercase'>Back to Home</Button>
            </Link>
        </div>
    )
}
