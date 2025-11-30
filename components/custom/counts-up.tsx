'use client'
import CountUp from 'react-countup'

const CountsUp = ({
    start,
    end,
    duration,
    prefix,
    suffix,
    delay,
    className,
}: {
    start: number
    end: number
    duration?: number
    prefix?: string
    suffix?: string
    delay?: number
    className?: string
}) => {
    return (
        <CountUp
            start={start}
            end={end}
            duration={duration}
            delay={delay}
            prefix={prefix}
            suffix={suffix}
            className={className}
            enableScrollSpy={true}
            scrollSpyOnce={true}
        >
            {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
    )
}

export default CountsUp
