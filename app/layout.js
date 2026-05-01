import './globals.css'

export const metadata = {
  title: 'Mistake Tracker — Learn from every error',
  description: 'An intelligent learning journal that transforms your mistakes into growth. Powered by AI.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Subtle ambient background glow */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#2997ff] opacity-[0.03] blur-[120px]"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#bf5af2] opacity-[0.03] blur-[120px]"></div>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="flex items-center justify-between h-12">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2.5 group">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png"
                  alt="Mistake Tracker"
                  className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-sm font-semibold text-[#f5f5f7] tracking-tight">
                  Mistake Tracker
                </span>
              </a>

              {/* Nav links */}
              <div className="flex items-center gap-7">
                <a href="/" className="text-xs font-normal text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-300">
                  Dashboard
                </a>
                <a href="#insights" className="text-xs font-normal text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-300">
                  Insights
                </a>
                <a href="#" className="text-xs font-normal text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-300">
                  History
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main className="max-w-[980px] mx-auto px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] mt-32">
          <div className="max-w-[980px] mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-[#6e6e73]">
                Mistake Tracker. Built to help you grow.
              </p>
              <div className="flex items-center gap-5">
                <a href="#" className="text-[11px] text-[#6e6e73] hover:text-[#86868b] transition-colors">Privacy</a>
                <a href="#" className="text-[11px] text-[#6e6e73] hover:text-[#86868b] transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}