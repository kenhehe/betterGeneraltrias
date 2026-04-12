/**
 * Table rendered as cards by default.
 * Each row becomes a card: first column is the card title,
 * remaining columns render as labeled field rows.
 * A small toggle lets power users switch to the raw table on desktop.
 */

import { type ReactNode, type HTMLAttributes, useState } from 'react';
import { LayoutList, Table } from 'lucide-react';
import { type TypographyTheme } from './typographyThemes';

// ─── Tree helpers ──────────────────────────────────────────────────────────────

type AnyEl = { type: unknown; props: { children?: ReactNode } };

function asEl(n: ReactNode): AnyEl | null {
  if (typeof n === 'object' && n !== null && 'type' in n && 'props' in n) {
    return n as AnyEl;
  }
  return null;
}

function extractText(node: ReactNode): string {
  if (!node) return '';
  if (typeof node === 'string') return node.trim();
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).filter(Boolean).join(' ');
  const el = asEl(node);
  if (el) return extractText(el.props.children);
  return '';
}

function findByType(node: ReactNode, tag: string): AnyEl[] {
  const results: AnyEl[] = [];
  function walk(n: ReactNode) {
    if (!n) return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    const el = asEl(n);
    if (!el) return;
    if (el.type === tag) results.push(el);
    else walk(el.props.children);
  }
  walk(node);
  return results;
}

function parseTable(children: ReactNode): { headers: string[]; rows: string[][] } {
  const headers: string[] = [];
  const rows: string[][] = [];

  // thead > tr > th
  const theads = findByType(children, 'thead');
  theads.forEach(thead => {
    findByType(thead.props.children, 'th').forEach(th => {
      headers.push(extractText(th.props.children));
    });
  });

  // tbody > tr > td
  const tbodies = findByType(children, 'tbody');
  tbodies.forEach(tbody => {
    findByType(tbody.props.children, 'tr').forEach(tr => {
      const cells = findByType(tr.props.children, 'td').map(td =>
        extractText(td.props.children)
      );
      if (cells.length > 0) rows.push(cells);
    });
  });

  return { headers, rows };
}

// ─── Component ─────────────────────────────────────────────────────────────────

export const TableWithToggle = ({
  children,
  theme,
  ...props
}: {
  children: ReactNode;
  theme: TypographyTheme;
} & HTMLAttributes<HTMLTableElement>) => {
  const [showTable, setShowTable] = useState(false);
  const { headers, rows } = parseTable(children);
  const hasData = rows.length > 0 && headers.length > 0;

  if (!hasData || showTable) {
    return (
      <div className="mb-5">
        {hasData && (
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setShowTable(false)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <LayoutList size={13} />
              Card view
            </button>
          </div>
        )}
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className={theme.components.table} {...props}>
            {children}
          </table>
        </div>
      </div>
    );
  }

  // ── Card view (default) ────────────────────────────────────────────────────
  const [titleHeader, ...fieldHeaders] = headers;

  return (
    <div className="mb-5">
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setShowTable(true)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <Table size={13} />
          Table view
        </button>
      </div>

      <div className="space-y-3">
        {rows.map((row, ri) => {
          const [title, ...fields] = row;
          return (
            <div
              key={ri}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card title row */}
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                  {titleHeader}
                </div>
                <div className="text-sm font-black text-gray-900 leading-snug">
                  {title || '—'}
                </div>
              </div>

              {/* Field rows */}
              <div className="divide-y divide-gray-50">
                {fieldHeaders.map((header, fi) => (
                  <div key={fi} className="px-4 py-2.5 flex items-start gap-3">
                    <span className="text-[10px] font-bold text-primary-600 uppercase tracking-wide w-24 shrink-0 pt-0.5">
                      {header}
                    </span>
                    <span className="text-xs text-gray-700 leading-relaxed flex-1">
                      {fields[fi] || '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
