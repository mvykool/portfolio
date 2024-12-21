import React from "react";

const ExpOverview = () => {
  return (
    <div className="[--background:#fff] [--color:#000] [--muted:#242424] [--muted-foreground:#9c9c9c] [--border:#2e2e2e] [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white[box-shadow:var(--shadow)]">
      <div
        className="[--tl-color:#059669] [--tl-rounded:9999px] [--tl-bullet-size:25px] [--tl-line-width:3px] [--offset:calc(var(--tl-bullet-size)/2+var(--tl-line-width)/2)] [&_[data-child=bullet]]:left-[calc((var(--tl-bullet-size)/2+var(--tl-line-width)/2)*-1)] [&_[data-child=bullet]]:right-auto [&_[data-child=body]]:pl-[var(--offset)] [&_[data-tl=item]]:before:[--timeline-line-left:calc(var(--tl-line-width)*-1)] [&_[data-tl=item]]:before:[var(--timeline-line-right:auto)] [&_[data-tl=item]]:pl-[var(--offset)] p-4 pl-8"
        data-align="left"
        role="group"
      >
        <div
          className="[--item-border-color:#424242] [--tli-border-style:dotted] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&:where(:not(:last-of-type))]:[--timeline-line-display:block] [&:where(:not(:first-of-type))]:mt-8 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:h-40 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
          data-line-active="true"
          data-tl="item"
        >
          <div
            className="bg-[#fff] border-[var(--muted)] text-[var(--muted)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
            data-active="true"
            data-child="bullet"
          >
            <svg
              width="1em"
              height="1em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth={2}
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 3l0 6" />
              <path d="M12 15l0 6" />
            </svg>
          </div>
          <div data-child="body">
            <span className="font-extrabold text-sm leading-none font-mono text-gray-100">
              Software Engineer - UI
            </span>
            <div className="mt-0" role="group">
              <p className="flex flex-row flex-nowrap items-center gap-2 text-zinc-600 dark:text-zinc-500">
                <span className="text-sm text-gray-300 my-3 font-normal font-mono line-clamp-1">
                  Wazoku
                </span>
              </p>
            </div>
            <div
              className="relative text-sm flex flex-row items-center gap-2 w-max [text-align:inherit] "
              role="group"
            >
              <time className="flex flex-row items-center text-xs text-gray-500 gap-2 font-mono">
                Aug 2023 - Current
              </time>
            </div>
          </div>
        </div>
        <div
          className="[--item-border-color:#424242] [--tli-border-style:dotted] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&:where(:not(:last-of-type))]:[--timeline-line-display:block] [&:where(:not(:first-of-type))]:mt-1 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:h-80 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
          data-line-active="true"
          data-tl="item"
        >
          <div
            className="bg-[#fff] border-[var(--muted)] text-[var(--muted)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
            data-active="true"
            data-child="bullet"
          >
            <svg
              width="1em"
              height="1em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth={2}
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 3l0 6" />
              <path d="M12 15l0 6" />
            </svg>
          </div>
          <div data-child="body">
            <span className="font-extrabold text-sm leading-none font-mono text-gray-100">
              Frontend Developer
            </span>
            <div className="mt-0" role="group">
              <p className="flex flex-row flex-nowrap items-center gap-2 text-zinc-600 dark:text-zinc-500">
                <span className="text-sm text-gray-300 my-3 font-normal font-mono line-clamp-1">
                  Presik Smart Tech
                </span>
              </p>
            </div>
            <div
              className="relative text-sm flex flex-row items-center gap-2 w-max [text-align:inherit] "
              role="group"
            >
              <time className="flex text-gray-500 text-xs flex-row items-center gap-2 font-mono">
                Feb 2023 - Jun 2023
              </time>
            </div>
          </div>
        </div>
        <div
          className="[--item-border-color:#424242] [--tli-border-style:dot] [--item-line:var(--tl-line-width)_var(--tli-border-style,solid)_var(--item-border-color)] [&_[data-child=bullet]]:data-[line-active]:border-[var(--tli-color,var(--tl-color))] group relative text-left text-zinc-600 dark:text-zinc-500 [&:where(:not(:last-of-type))]:[--timeline-line-display:block] [&:where(:not(:first-of-type))]:mt-1 pb-4 dark:[--item-border-color:#424242] before:absolute before:pointer-events-none before:top-0 before:h-80 before:left-[var(--timeline-line-left,0)] before:right-[var(--timeline-line-right,0)] before:-bottom-8 before:[display:var(--timeline-line-display,none)] before:[border-inline-start:var(--item-line)] [&:where([data-line-active])]:before:border-[var(--tli-color,var(--tl-color))]"
          data-line-active="true"
          data-tl="item"
        >
          <div
            className="bg-[#fff] border-[var(--muted)] text-[var(--muted)] border-solid [border-width:var(--tli-line-width,var(--tl-line-width))] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer"
            data-active="true"
            data-child="bullet"
          >
            <svg
              width="1em"
              height="1em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth={2}
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 3l0 6" />
              <path d="M12 15l0 6" />
            </svg>
          </div>
          <div data-child="body">
            <span className="font-extrabold text-sm leading-none font-mono text-gray-100">
              Frontend Developer
            </span>
            <div className="mt-0" role="group">
              <p className="flex flex-row flex-nowrap items-center gap-2 text-zinc-600 dark:text-zinc-500">
                <span className="text-sm text-gray-300 my-3 font-normal font-mono line-clamp-1">
                  peac Software
                </span>
              </p>
            </div>
            <div
              className="relative text-sm flex flex-row items-center gap-2 w-max [text-align:inherit] "
              role="group"
            >
              <time className="flex flex-row items-center text-xs text-gray-500 gap-2 font-mono">
                Feb 2021 - Jan 2023
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpOverview;
