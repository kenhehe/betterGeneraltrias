import { Clock } from 'lucide-react';

interface DisclaimerBarProps {
  updatedAt?: string;
}

export default function DisclaimerBar({ updatedAt = 'April 2026' }: DisclaimerBarProps) {
  return (
    <div className="mt-8 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 text-xs text-amber-800">
      <Clock className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
      <p className="leading-relaxed">
        <span className="font-bold">Last updated: {updatedAt}</span>
        {' · '}
        Information on this page is provided for transparency. For the most current details, contact the relevant city office directly.
      </p>
    </div>
  );
}
