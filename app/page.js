import LogMistakeForm from './components/LogMistakeForm';
import AiInsights from './components/AiInsights';

export default function Home() {
  const dummyUserId = "user_123";

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 text-center animate-fade-in-up">
        <p className="text-[#2997ff] text-sm font-semibold tracking-wide mb-3">
          Intelligent Learning Journal
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] text-[#f5f5f7] mb-5 leading-[1.05]">
          Learn from<br />
          <span className="bg-gradient-to-r from-[#2997ff] via-[#bf5af2] to-[#64d2ff] bg-clip-text text-transparent">
            every mistake.
          </span>
        </h1>
        <p className="text-[#86868b] text-lg md:text-xl font-normal max-w-lg mx-auto leading-relaxed">
          Log errors, uncover patterns, and grow with AI-powered insights that help you never repeat the same mistake twice.
        </p>
      </section>

      {/* Feature Cards Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16 animate-fade-in-up-delay-1">
        {/* Card 1 */}
        <div className="rounded-2xl bg-[#1d1d1f] p-6 flex flex-col items-start gap-4 group hover:bg-[#2d2d2f] transition-colors duration-300">
          <div className="w-10 h-10 rounded-xl bg-[#2997ff]/10 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
              alt="Log"
              className="w-5 h-5 opacity-70 invert"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#f5f5f7] mb-1">Quick Capture</h3>
            <p className="text-[13px] text-[#86868b] leading-relaxed">
              Log mistakes in seconds with structured entries. Tag, categorize, and describe what went wrong.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-[#1d1d1f] p-6 flex flex-col items-start gap-4 group hover:bg-[#2d2d2f] transition-colors duration-300">
          <div className="w-10 h-10 rounded-xl bg-[#bf5af2]/10 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1253/1253266.png"
              alt="Patterns"
              className="w-5 h-5 opacity-70 invert"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#f5f5f7] mb-1">Pattern Detection</h3>
            <p className="text-[13px] text-[#86868b] leading-relaxed">
              AI analyzes your entries to surface recurring blind spots and cognitive patterns you might miss.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-[#1d1d1f] p-6 flex flex-col items-start gap-4 group hover:bg-[#2d2d2f] transition-colors duration-300">
          <div className="w-10 h-10 rounded-xl bg-[#30d158]/10 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2621/2621040.png"
              alt="Growth"
              className="w-5 h-5 opacity-70 invert"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#f5f5f7] mb-1">Accelerated Growth</h3>
            <p className="text-[13px] text-[#86868b] leading-relaxed">
              Turn every failure into a lesson. Track your progress and build lasting technical intuition.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.06] mb-16"></div>

      {/* Main Content: Form + Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start animate-fade-in-up-delay-2">
        
        {/* Left: Log Form */}
        <div className="lg:col-span-7">
          <LogMistakeForm userId={dummyUserId} />
        </div>

        {/* Right: AI Insights */}
        <div id="insights" className="lg:col-span-5 sticky top-16">
          <AiInsights userId={dummyUserId} />
        </div>

      </section>
    </div>
  );
}