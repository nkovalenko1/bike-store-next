'use client'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function FeedbackSwiper() {
    return (
        <div className="relative overflow-hidden pb-20 pt-10 lg:pb-40 lg:pt-20 xl:pb-[230px]">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl bg-[url(/images/feedback-bg.png)] pb-[390px] pt-8 md:rounded-[40px] lg:rounded-[80px] lg:pb-[550px] lg:pt-20 xl:pb-[616px] xl:pt-[100px]">
                    <Image
                        src="/images/feedback-quote.png"
                        alt="Feedback quote"
                        className="absolute bottom-0 right-0 z-[1] w-96 lg:w-[600px] xl:w-auto"
                        width={600}
                        height={600}
                        style={{ height: "auto" }}
                    />
                    <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-white/90 md:rounded-[40px] lg:rounded-[80px]"></span>
                    <h2 className="relative z-10 mx-auto w-full max-w-[740px] px-4 text-center text-2xl font-bold md:text-5xl/[60px] lg:text-6xl/[70px] 2xl:text-[70px]/[84px]">
                        Customer stories and feedback for&nbsp;
                        <span className="font-roboto font-medium italic">
                            Cyclify
                        </span>
                    </h2>
                </div>
            </div>
            <div className="-mt-[370px] flex flex-col gap-2.5 lg:-mt-[500px] lg:gap-5 xl:-mt-[566px]">
                <div className='z-10'>
                    <Swiper
                        className="marquee-swiper !-my-20 !grid !-rotate-2 !py-20"
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={20000}
                        loopAdditionalSlides={2}
                        loopAddBlankSlides={true}
                        allowTouchMove={false}
                        breakpoints={{
                            320: {
                                spaceBetween: 10,
                            },
                            1024: {
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile1.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>John Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        I’m thrilled with my new bike from
                                        Cyclify.
                                    </span>
                                    The team provided excellent advice and
                                    service. It’s been a great upgrade for my
                                    rides!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile2.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Hazel Simmons</h3>
                                        <p className="text-xs/[14px]">
                                            November 7, 202022
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Amazing bike shop! Cyclify.
                                    </span>
                                    The staff were knowledgeable and helped me
                                    find the perfect ride. Highly satisfied with
                                    the service and my new bike!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile3.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Joseph Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Amazing bike shop! Cyclify.
                                    </span>
                                    The staff were knowledgeable and helped me
                                    find the perfect ride. Highly satisfied with
                                    the service and my new bike!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile1.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Evelyn Clark</h3>
                                        <p className="text-xs/[14px]">
                                            October 25, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Love this store!
                                    </span>
                                    The staff were friendly and offered great
                                    advice. My new bike is exactly what I needed
                                    for my daily rides.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile2.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>John Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;Great selection and superb customer
                                    service. The staff helped me choose the
                                    right bike with no pressure.
                                    <span className="text-teal">
                                        Highly recommend for any cyclist!&quot;
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile3.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Joseph Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Amazing bike shop! Cyclify.
                                    </span>
                                    The staff were knowledgeable and helped me
                                    find the perfect ride. Highly satisfied with
                                    the service and my new bike!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile1.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Evelyn Clark</h3>
                                        <p className="text-xs/[14px]">
                                            October 25, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Love this store!
                                    </span>
                                    The staff were friendly and offered great
                                    advice. My new bike is exactly what I needed
                                    for my daily rides.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile2.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>John Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;Great selection and superb customer
                                    service. The staff helped me choose the
                                    right bike with no pressure.
                                    <span className="text-teal">
                                        Highly recommend for any cyclist!&quot;
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="relative z-10 -rotate-180">
                    <Swiper
                        className="marquee-swiper !-my-20 !grid !-rotate-2 !py-20"
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={20000}
                        loopAdditionalSlides={2}
                        loopAddBlankSlides={true}
                        allowTouchMove={false}
                        breakpoints={{
                            320: {
                                spaceBetween: 10,
                            },
                            1024: {
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile1.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>John Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        I’m thrilled with my new bike from
                                        Cyclify.
                                    </span>
                                    The team provided excellent advice and
                                    service. It’s been a great upgrade for my
                                    rides!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile2.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Hazel Simmons</h3>
                                        <p className="text-xs/[14px]">
                                            November 7, 202022
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Amazing bike shop! Cyclify.
                                    </span>
                                    The staff were knowledgeable and helped me
                                    find the perfect ride. Highly satisfied with
                                    the service and my new bike!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile3.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Joseph Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Amazing bike shop! Cyclify.
                                    </span>
                                    The staff were knowledgeable and helped me
                                    find the perfect ride. Highly satisfied with
                                    the service and my new bike!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile1.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Evelyn Clark</h3>
                                        <p className="text-xs/[14px]">
                                            October 25, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Love this store!
                                    </span>
                                    The staff were friendly and offered great
                                    advice. My new bike is exactly what I needed
                                    for my daily rides.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile2.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>John Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;Great selection and superb customer
                                    service. The staff helped me choose the
                                    right bike with no pressure.
                                    <span className="text-teal">
                                        Highly recommend for any cyclist!&quot;
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile3.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Joseph Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Amazing bike shop! Cyclify.
                                    </span>
                                    The staff were knowledgeable and helped me
                                    find the perfect ride. Highly satisfied with
                                    the service and my new bike!&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile1.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>Evelyn Clark</h3>
                                        <p className="text-xs/[14px]">
                                            October 25, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;
                                    <span className="text-teal">
                                        Love this store!
                                    </span>
                                    The staff were friendly and offered great
                                    advice. My new bike is exactly what I needed
                                    for my daily rides.&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-80 !-rotate-180 lg:!w-[460px]">
                            <div className="shrink-0 rounded-[20px] bg-white p-4 shadow-[0_20px_90px_0_rgba(0,0,0,0.08)] lg:p-[30px] h-full">
                                <div className="mb-2 flex gap-2.5 lg:mb-5">
                                    <div className="size-10 shrink-0 overflow-hidden rounded-full bg-gray">
                                        <Image
                                            src="/images/profile2.png"
                                            alt="Profile"
                                            width="40"
                                            height="40"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-medium">
                                        <h3>John Lewis</h3>
                                        <p className="text-xs/[14px]">
                                            Oct 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <p className="line-clamp-4 text-sm/5 font-medium text-gray lg:text-base/[26px]">
                                    &quot;Great selection and superb customer
                                    service. The staff helped me choose the
                                    right bike with no pressure.
                                    <span className="text-teal">
                                        Highly recommend for any cyclist!&quot;
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
