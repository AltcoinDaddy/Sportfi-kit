import { ConnectButton, SafeAreaWrapper, FanTokenGate } from 'sportfi-kit';
import { Home, LayoutGrid, Wallet, User, Play } from 'lucide-react';

function App() {
  const JUV_TOKEN = '0x...123'; // Replace with actual token address

  return (
    <SafeAreaWrapper className="flex min-h-screen justify-center bg-[#f2f2f6] font-sans text-black">
      {/* Mini App Container */}
      <div className="relative flex h-[100dvh] w-full max-w-[480px] flex-col overflow-hidden bg-[#f2f2f6] sm:border-x sm:border-gray-200">

        {/* Telegram-style Top Bar */}
        <header className="flex h-14 shrink-0 items-center justify-between bg-white px-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
              <span className="text-[10px] font-bold text-white">SF</span>
            </div>
            <span className="text-[16px] font-semibold">SportFi</span>
          </div>
          {/* Subtle native-looking connect button */}
          <ConnectButton className="!rounded-lg !bg-[#f2f2f6] !px-3 !py-1.5 !text-[13px] !font-medium !text-black hover:!bg-gray-200" />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
          <div className="p-4">

            {/* Page Title */}
            <div className="mb-5 px-1">
              <h1 className="text-[28px] font-bold tracking-tight">Locker Room</h1>
              <p className="mt-1.5 text-[15px] leading-snug text-gray-500">
                Verify your JUV Fan Token holdings to unlock behind-the-scenes access and exclusive drops.
              </p>
            </div>

            {/* iOS/Telegram styled List Group */}
            <div className="mb-6 overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <span className="text-[15px] font-medium text-black">Required Asset</span>
                <span className="text-[15px] text-gray-500">Juventus (JUV)</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-[15px] font-medium text-black">Minimum Hold</span>
                <span className="text-[15px] text-gray-500">5.0 Tokens</span>
              </div>
            </div>

            {/* The Gate Component */}
            <div className="rounded-xl">
              <FanTokenGate
                tokenAddress={JUV_TOKEN}
                tokenSymbol="JUV"
                minBalance={5}
                label="Locker Room"
                description="Hold tokens to unlock stadium access."
              >
                {/* Unlocked State - Native Video Card Look */}
                <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
                  <div className="relative aspect-video w-full bg-gray-900">
                    <img
                      src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                      alt="Stadium Tunnel"
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Live Badge */}
                    <div className="absolute top-3 left-3 rounded bg-red-500 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                      Live
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
                        <Play className="h-5 w-5 ml-1 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Video Content Info */}
                  <div className="p-4">
                    <h2 className="text-[17px] font-semibold text-black">
                      Post-Match Analysis
                    </h2>
                    <p className="mt-1 text-[14px] text-gray-500 line-clamp-2">
                      Unfiltered analysis straight from the tunnel after tonight's historic victory against our rivals.
                    </p>

                    <button className="mt-4 flex w-full items-center justify-center rounded-lg bg-emerald-500 py-3 text-[15px] font-semibold text-white transition-colors active:bg-emerald-600">
                      Watch Video
                    </button>
                  </div>
                </div>
              </FanTokenGate>
            </div>

          </div>
        </main>

        {/* Telegram/iOS Style Bottom Tab Bar */}
        <nav className="absolute bottom-0 z-50 w-full bg-white border-t border-gray-200 pb-safe">
          <div className="flex h-[60px] items-center justify-around px-2">
            <button className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-gray-400 hover:text-emerald-500 transition-colors">
              <Home size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Home</span>
            </button>
            <button className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-emerald-500 transition-colors">
              <LayoutGrid size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Content</span>
            </button>
            <button className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-gray-400 hover:text-emerald-500 transition-colors">
              <Wallet size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Wallet</span>
            </button>
            <button className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-gray-400 hover:text-emerald-500 transition-colors">
              <User size={24} strokeWidth={2} />
              <span className="text-[10px] font-medium">Profile</span>
            </button>
          </div>
        </nav>

        {/* Global Styles for Scrollbar Hiding */}
        {/* @ts-ignore */}
        <style dangerouslySetInline={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .pb-safe {
            padding-bottom: calc(env(safe-area-inset-bottom) + 4px);
          }
        `}} />
      </div>
    </SafeAreaWrapper>
  );
}

export default App;
