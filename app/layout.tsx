import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "WSID",
  description: "양자택일 투표 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body
        className={`min-h-dvh bg-neutral-950 text-neutral-100 antialiased ${pretendard.className}`}
      >
        <div className="flex min-h-dvh flex-col">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
            <div
              className="mx-auto w-full px-4 sm:px-6
                            max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1100px]"
            >
              <div className="flex h-14 items-center justify-between">
                <a href="/" className="font-semibold tracking-tight">
                  WSID
                </a>
                <nav className="flex items-center gap-3 text-sm">
                  <a href="/me" className="opacity-80 hover:opacity-100">
                    내정보
                  </a>
                  <a
                    href="/login"
                    className="opacity-80 hover:opacity-100"
                  >
                    로그인
                  </a>
                </nav>
              </div>
            </div>
          </header>

          {/* 메인: 중앙 정렬 컨테이너 */}
          <main className="flex-1 py-6 sm:py-8">
            <div
              className="mx-auto w-full px-4 sm:px-6
                            max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1100px]"
            >
              {children}
            </div>
          </main>

          {/* 푸터: 얇게 */}
          <footer className="border-t border-white/10 py-6 text-sm opacity-70">
            <div
              className="mx-auto w-full px-4 sm:px-6
                            max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1100px]"
            >
              © {new Date().getFullYear()} Decide For Me
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
