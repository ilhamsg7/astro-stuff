import { FaHandPaper, FaHandsHelping, FaSync, FaUsers } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-500">
            We Race as One
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            In 2020 we launched the #WeRaceAsOne initiative
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-50">
            A platform aimed at tackling the biggest issues facing our sport and
            global communities, underpinning the Formula 1 strategy to make a
            tangible difference in the world in which we race. In 2020, the
            campaign was centred around two main issues: the Covid-19 pandemic,
            and inequality
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-red-500">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                  <FaHandPaper className="text-white" />
                </div>
                Inclusion
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-300">
                Creating inclusive and diverse content. F1 also has a proven
                history of pioneering technologies & innovations that have
                positively contributed to society
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-red-500">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                  <FaHandsHelping className="text-white" />
                </div>
                Diversity
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-300">
                We are committed to building a more diverse and inclusive sport,
                breaking down the stereotypes associated with a career in
                motorsports and encouraging people from all backgrounds to get
                involved, as we aim to create a diverse Formula 1 that reflects
                the world in which we race.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-red-500">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                  <FaSync className="text-white" />
                </div>
                Sustainability
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-300">
                We continue to lead the way in creating a sustainable sport for
                fans around the world to enjoy, using innovative technology &
                changing the way we work
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-red-500">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                  <FaUsers className="text-white" />
                </div>
                Community
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-300">
                As a truly global sport, we are committed to connecting and
                contributing to the communities we visit, providing
                opportunities for local people and causes to get in on the
                action, as we aim to leave a positive lasting impact wherever we
                race
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
