import { COMPANY_MILESTONES } from '../../utils/constants'

export function MilestoneLevels() {
  return (
    <div className="mx-auto max-w-3xl">
      <ol className="relative space-y-0">
        {COMPANY_MILESTONES.map((milestone, index) => {
          const isLast = index === COMPANY_MILESTONES.length - 1
          return (
            <li key={milestone.level} className="relative flex gap-5 pb-10 last:pb-0">
              {!isLast && (
                <span
                  className="bg-base-300 absolute left-[1.375rem] top-12 h-[calc(100%-1rem)] w-0.5"
                  aria-hidden
                />
              )}

            

              <div className="card bg-base-100 flex-1 border border-base-300 shadow-sm">
                <div className="card-body py-4">
                  <h4 className="text-lg font-semibold">{milestone.title}</h4>
                  <p className="text-base-content/70 mt-1 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
