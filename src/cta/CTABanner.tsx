import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  label?: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="bg-primary-50 mx-auto flex max-w-4xl flex-col rounded-2xl border border-primary-200 p-5 text-center shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:text-left">
    <div className="space-y-2 text-2xl font-semibold">
      {props.label && (
        <p className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
          {props.label}
        </p>
      )}
      <div className="text-gray-900">{props.title}</div>
    </div>

    <div className="mt-3 whitespace-nowrap sm:ml-2 sm:mt-0">{props.button}</div>
  </div>
);

export { CTABanner };
