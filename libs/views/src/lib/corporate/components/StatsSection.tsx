/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid"
import clsx from "clsx"

const stats = [
  {
    name: "Lines Merged",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase"
  },
  {
    name: "Burn Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase"
  },
  {
    name: "Defective Rate",
    stat: "2.57%",
    previousStat: "2.62%",
    change: ".405%",
    changeType: "decrease"
  }
]

export function StatsSection() {
  return (
    <div className="pb-8 pt-16 mx-2 md:mx-4">
      <h3 className="text-lg leading-6 font-medium text-secondary-2">KPI Performance</h3>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-shark-50 overflow-hidden shadow divide-y divide-shark-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-shark-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-shark-500">
                  from {item.previousStat}
                </span>
              </div>

              <div
                className={clsx(
                  item.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"} by
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default StatsSection
