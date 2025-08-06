import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-ms-nocturne">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-ms-eclipse/95 backdrop-blur-sm z-50 border-b border-ms-blueberry/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Image src="/full_logo.png" alt="History Sleep" width={32} height={32} className="object-contain" />
              <span className="text-h3 font-semibold text-ms-white hidden sm:inline">History Sleep</span>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <Link 
                href="https://apps.apple.com/us/app/history-sleep/id6749167616"
                className="px-3 sm:px-4 py-2 bg-ms-orchid text-white rounded-lg font-medium text-xs sm:text-body hover:bg-ms-fuschia transition-colors"
              >
                <span className="hidden sm:inline">App Store</span>
                <span className="sm:hidden">iOS</span>
              </Link>
              <Link 
                href="#"
                className="px-3 sm:px-4 py-2 bg-ms-periwinkle text-white rounded-lg font-medium text-xs sm:text-body hover:opacity-90 transition-colors"
              >
                <span className="hidden sm:inline">Coming Soon</span>
                <span className="sm:hidden">Soon</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-nocturne to-ms-eclipse">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ms-white mb-6 px-4 sm:px-0">
              Bore yourself<br className="hidden sm:inline" />
              <span className="sm:hidden">To Fall Asleep</span>
              <span className="hidden sm:inline">To Fall Asleep</span>
            </h1>
            <p className="text-lg sm:text-xl text-ms-lavendar max-w-2xl mx-auto mb-8 px-4 sm:px-0">
              History Sleep plays AI-generated boring history lectures that gently lull you into deep sleep. 
              No more lying awake with anxious thoughts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0">
              <Link 
                href="https://apps.apple.com/us/app/history-sleep/id6749167616"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-ms-orchid text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-ms-fuschia transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Download for iOS
              </Link>
              <Link 
                href="#"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-ms-periwinkle text-white rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Android Coming Soon
              </Link>
            </div>
          </div>

          {/* App Preview - 3 Phone Showcase */}
          <div className="relative mt-8 sm:mt-16">
            <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-16">
              {/* Left phone - Stories List */}
              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-500 hidden md:block">
                <div className="absolute inset-0 bg-ms-orchid/10 blur-2xl" />
                <Image 
                  src="/mockups/frame2.png" 
                  alt="Story Selection" 
                  width={280} 
                  height={572}
                  priority
                  className="relative drop-shadow-xl"
                />
              </div>
              
              {/* Center phone - Home (shows on all screens, especially mobile) */}
              <div className="relative z-10 transform sm:scale-110 max-w-[280px] sm:max-w-none">
                <div className="absolute inset-0 bg-ms-periwinkle/20 blur-3xl" />
                <Image 
                  src="/mockups/frame1.png" 
                  alt="Home Screen" 
                  width={320} 
                  height={654}
                  priority
                  className="relative drop-shadow-2xl w-full h-auto"
                />
              </div>
              
              {/* Right phone - Player */}
              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500 hidden md:block">
                <div className="absolute inset-0 bg-ms-fuschia/10 blur-2xl" />
                <Image 
                  src="/mockups/frame3.png" 
                  alt="Sleep Player" 
                  width={280} 
                  height={572}
                  priority
                  className="relative drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-eclipse to-ms-blueberry">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-ms-white mb-12">
            Loved by Insomniacs Everywhere
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ms-orchid fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-ms-buttercream mb-4">
                "I've tried numerous apps to help with my insomnia, but this one truly stands out. 
                Since using this app, I've experienced significantly better sleep quality."
              </p>
              <p className="text-sm text-ms-lavendar">— Drew P., App Store Review</p>
            </div>
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ms-orchid fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-ms-buttercream mb-4">
                "This is exactly what I was looking for... something that allows me to drift-off 
                to the deeper chasm of internal being. Love the app!"
              </p>
              <p className="text-sm text-ms-lavendar">— pequickster, App Store Review</p>
            </div>
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ms-orchid fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg text-ms-buttercream mb-4">
                "I love this app so much! Nothing gets me to sleep like this one. 
                Fantastic app!"
              </p>
              <p className="text-sm text-ms-lavendar">— Blank_Pages, App Store Review</p>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ms-blueberry">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-ms-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-center text-ms-lavendar mb-12 max-w-2xl mx-auto">
            Our AI creates endlessly boring content specifically designed to help your mind drift off
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-ms-periwinkle to-ms-orchid rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold text-ms-white mb-2">Ancient Civilizations</h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Monotonous lectures on pottery shards from Mesopotamia and grain storage in Ancient Egypt. 
                Detailed enough to occupy your mind, dull enough to let you drift off.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-ms-coral to-ms-fuschia rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold text-ms-white mb-2">Medieval Chronicles</h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Droning accounts of feudal tax records and agricultural yields from 13th century Europe. 
                Like your most boring history professor, but on demand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-ms-blueberry to-ms-nocturne rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold text-ms-white mb-2">Soothing Voices</h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Calm, relaxing narration paired with carefully chosen background sounds. 
                Creates the perfect serene atmosphere for sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-blueberry to-ms-eclipse">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ms-nocturne/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl border border-ms-lavendar/20">
            <h2 className="text-3xl font-bold text-ms-white mb-6">Why I Created History Sleep</h2>
            <p className="text-lg text-ms-buttercream mb-4">
              Hi, I'm Logan. Like many of you, I consistently struggle to fall asleep. 
              My mind races - replaying conversations, planning tomorrow, etc.
            </p>
            <p className="text-lg text-ms-buttercream mb-4">
              I've tried many solutions: meditation apps, white noise machines, sleep podcasts. 
              Some helped a little, but nothing really worked consistently. The podcasts were either 
              too interesting (keeping me awake) or the same content over and over (boring, but predictably so).
            </p>
            <p className="text-lg text-ms-buttercream mb-4">
              As a software engineering student, I had an idea: what if AI could generate infinitely boring 
              history lectures? Historical content that would give my anxious brain something to focus on, 
              but be so wonderfully dull that I'd drift off naturally? I think it works pretty well.
            </p>
            <p className="text-lg text-ms-buttercream font-medium">
              
            </p>
            <p className="text-ms-orchid font-semibold mt-6">— Logan, Founder</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ms-eclipse">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-ms-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                How is this different from other sleep apps?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Unlike meditation apps or white noise, History Sleep gives your busy mind something to follow - 
                but makes it so boring you can't help but drift off. The AI ensures you never hear the same history lecture twice.
              </p>
            </div>
            
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                Is it really AI-generated?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Yes! Every history lecture is uniquely generated by AI, ensuring endless variety. 
                You'll never run out of new, perfectly boring historical content.
              </p>
            </div>
            
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                Can I try it for free?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                Absolutely! The app is free to download and includes daily free history lectures. 
                Premium unlocks unlimited historical content and custom voice features.
              </p>
            </div>
            
            <div className="bg-ms-blueberry/50 backdrop-blur rounded-xl p-6 shadow-md border border-ms-lavendar/20">
              <h3 className="text-h3 font-semibold text-ms-white mb-2">
                What if I fall asleep with it playing?
              </h3>
              <p className="text-body-lg text-ms-buttercream/90">
                The history lectures are designed to be gentle and quiet. Most users report naturally waking less 
                as the monotonous historical content helps maintain deeper sleep cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-sleep">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready for the Best Sleep of Your Life?
          </h2>
          <p className="text-xl text-ms-buttercream mb-10">
            Join thousands who've finally found their perfect sleep solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link 
              href="https://apps.apple.com/us/app/meandering-sleep/id6502964632"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-ms-orchid text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-ms-fuschia transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Download for iOS
            </Link>
            <Link 
              href="https://play.google.com/store/apps/details?id=net.coventry.sleepless&hl=en"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-ms-periwinkle text-white rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Download for Android
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-ms-nocturne">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/full_logo.png" alt="History Sleep" width={24} height={24} className="object-contain" />
              <span className="text-white font-medium">History Sleep</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="mailto:support@coventrylabs.net" className="text-ms-lavendar hover:text-white transition-colors">
                support@coventrylabs.net
              </a>
              <a href="https://coventrylabs.net/privacy.html" className="text-ms-lavendar hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://coventrylabs.net/eula.html" className="text-ms-lavendar hover:text-white transition-colors">
                EULA
              </a>
            </div>
            <p className="text-ms-lavendar text-sm">
              © 2024 Coventry Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}