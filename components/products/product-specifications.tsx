"use client";

interface ProductSpecificationsProps {
  specifications: Record<string, string> | null;
}

const SPECIFICATION_LABELS: Record<string, string> = {
  ridersAge: "Riders age",
  frame: "Frame",
  fork: "Fork",
  crank: "Crank",
  bottomBracket: "Bottom Bracket",
  shifters: "Shifters",
  cogSet: "Cog Set",
  chainWheel: "Chain Wheel",
  frontDerailleur: "Front Derailleur",
  rearDerailleur: "Rear Derailleur",
  rims: "Rims",
  hubs: "Hubs",
  tires: "Tires",
  pedals: "Pedals",
  brakes: "Brakes",
  brakeLevers: "Brake Levers",
  handlebar: "Handlebar",
  stem: "Stem",
  headset: "Headset",
  grips: "Grips",
  saddle: "Saddle",
  seatPost: "Seat Post",
};

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  if (!specifications || Object.keys(specifications).length === 0) {
    return null;
  }

  const specificationEntries = Object.entries(specifications).filter(
    ([key, value]) => value && value.trim() !== ""
  );

  if (specificationEntries.length === 0) {
    return null;
  }

  return (
    <div className="mt-14 px-4 lg:mt-20">
      <div className="mx-auto max-w-[1880px] rounded-[10px] bg-[url(/images/full-bg-design.jpeg)] bg-cover bg-center bg-no-repeat px-5 py-14 sm:px-10 lg:py-20 2xl:px-[100px]">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold md:text-5xl xl:text-[70px]/[84px]">
            Specifications
          </h2>
          <p className="text-gray md:text-xl/6">
            For the Cyclify Bike Store
          </p>
        </div>
        <div className="mt-10 md:mt-14">
          <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {specificationEntries.map(([key, value], index) => {
              const label = SPECIFICATION_LABELS[key] || key;
              const isLast = index === specificationEntries.length - 1;

              return (
                <div
                  key={key}
                  className={`space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10 ${
                    isLast ? "" : ""
                  }`}
                >
                  <div className="text-lg/5 font-medium">{label}</div>
                  <div className="text-gray">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

