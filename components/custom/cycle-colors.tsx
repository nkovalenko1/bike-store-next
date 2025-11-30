import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

export default function CycleColors() {
    return (
        <div className="sticky-track bg-gradient-to-l from-[#E7EAE7] to-[#F2EEE8] pt-14 pb-16 lg:py-[100px]">
            <div className="container">
                <div className="relative z-10 mx-auto mb-5 w-full text-center text-2xl font-bold md:text-5xl/[60px] lg:mb-14 lg:text-6xl/[70px] 2xl:text-[70px]/[84px]">
                    <h2>Shine in any color.</h2>
                    <h3 className="font-roboto font-medium italic">
                        You&apos;ll always stand out.
                    </h3>
                </div>
                <Tabs defaultValue="1" className="relative">
                    <TabsList className="absolute inset-x-0 top-full mt-2 md:mt-0 flex items-center justify-center gap-[22px] p-2.5 md:inset-x-auto md:inset-y-0 md:left-0 md:flex-col">
                        <TabsTrigger value="1">
                            <div className="size-5 shrink-0 rounded-full bg-[#d1d1d1] ring-[6px] ring-transparent transition lg:size-[30px]"></div>
                        </TabsTrigger>
                        <TabsTrigger value="2">
                            <div className="size-5 shrink-0 rounded-full bg-[#2d2d2d] ring-[6px] ring-transparent transition lg:size-[30px]"></div>
                        </TabsTrigger>
                        <TabsTrigger value="3">
                            <div className="size-5 shrink-0 rounded-full bg-[#6093ac] ring-[6px] ring-transparent transition lg:size-[30px]"></div>
                        </TabsTrigger>
                        <TabsTrigger value="4">
                            <div className="size-5 shrink-0 rounded-full bg-[#f6a951] ring-[6px] ring-transparent transition lg:size-[30px]"></div>
                        </TabsTrigger>
                        <TabsTrigger value="5">
                            <div className="size-5 shrink-0 rounded-full bg-[#7aadac] ring-[6px] ring-transparent transition lg:size-[30px]"></div>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="1">
                        <div className="mx-auto flex h-80 w-full max-w-[792px] items-center justify-center sm:px-16 lg:h-[600px] lg:px-24">
                            <Image
                                src="/images/gray.png"
                                alt="Cycle"
                                className="h-full w-full object-contain"
                                width={600}
                                height={600}
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="2">
                        <div className="mx-auto flex h-80 w-full max-w-[792px] items-center justify-center sm:px-16 lg:h-[600px] lg:px-24">
                            <Image
                                src="/images/black.png"
                                alt="Cycle"
                                className="h-full w-full object-contain"
                                width={600}
                                height={600}
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="3">
                        <div className="mx-auto flex h-80 w-full max-w-[792px] items-center justify-center sm:px-16 lg:h-[600px] lg:px-24">
                            <Image
                                src="/images/blue.png"
                                alt="Cycle"
                                className="h-full w-full object-contain"
                                width={600}
                                height={600}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="4">
                        <div className="mx-auto flex h-80 w-full max-w-[792px] items-center justify-center sm:px-16 lg:h-[600px] lg:px-24">
                            <Image
                                src="/images/yellow.png"
                                alt="Cycle"
                                className="h-full w-full object-contain"
                                width={600}
                                height={600}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="5">
                        <div className="mx-auto flex h-80 w-full max-w-[792px] items-center justify-center sm:px-16 lg:h-[600px] lg:px-24">
                            <Image
                                src="/images/sky.png"
                                alt="Cycle"
                                className="h-full w-full object-contain"
                                width={600}
                                height={600}
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
