import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-emerald-600 text-white font-mono font-bold text-xs">SL</span>
          <div>
            <div className="font-semibold text-slate-900 dark:text-zinc-100">SnapLocator</div>
            <div className="text-xs">Free locators by The Testing Academy</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/install" className="hover:text-emerald-700">Install</Link>
          <Link to="/privacy" className="hover:text-emerald-700">Privacy</Link>
          <a href="https://github.com/PramodDutta/snaplocator" target="_blank" rel="noreferrer" className="hover:text-emerald-700">GitHub</a>
          <a href="https://thetestingacademy.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700">thetestingacademy.com</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-6 text-xs text-slate-400">
        © {new Date().getFullYear()} The Testing Academy. Free forever.
      </div>
    </footer>
  );
}
