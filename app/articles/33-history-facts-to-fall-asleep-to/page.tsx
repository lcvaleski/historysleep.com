import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '33 History Facts to Fall Asleep To - Calming Bedtime Stories',
  description: 'Discover 33 soothing history facts perfect for falling asleep. From ancient civilizations to fascinating historical tales that help you drift off peacefully.',
  keywords: 'history facts to fall asleep, bedtime history stories, calming history facts, sleep history, soothing historical facts',
}

export default function HistoryFactsArticle() {
  return (
    <div className="min-h-screen bg-ms-nocturne">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-ms-eclipse/95 backdrop-blur-sm z-50 border-b border-ms-blueberry/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image src="/full_logo.png" alt="History Sleep" width={32} height={32} className="object-contain" />
              <span className="text-h3 font-semibold text-ms-white hidden sm:inline">History Sleep</span>
            </Link>
            <div className="flex gap-2 sm:gap-3">
              <Link 
                href="https://apps.apple.com/us/app/history-sleep/id6749167616"
                className="px-3 sm:px-4 py-2 bg-ms-orchid text-white rounded-lg font-medium text-xs sm:text-body hover:bg-ms-fuschia transition-colors"
              >
                <span className="hidden sm:inline">App Store</span>
                <span className="sm:hidden">iOS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ms-eclipse/50 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl border border-ms-lavendar/20">
            <h1 className="text-4xl sm:text-5xl font-bold text-ms-white mb-8">
              33 History Facts to Fall Asleep To
            </h1>

            <div className="bg-gradient-to-r from-ms-blueberry/40 to-ms-periwinkle/20 rounded-2xl p-6 mb-8 border border-ms-lavendar/20">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex-1 w-full">
                  <p className="text-ms-lavendar text-sm uppercase tracking-wide mb-2">
                    🎧 Sample Episode
                  </p>
                  <p className="text-ms-white font-semibold text-lg mb-3">
                    "How Vikings Spent Their Time Between Raids"
                  </p>
                  <div className="bg-ms-nocturne/50 rounded-lg p-3">
                    <audio 
                      controls 
                      className="w-full h-12 [&::-webkit-media-controls-panel]:bg-ms-eclipse [&::-webkit-media-controls-current-time-display]:text-ms-buttercream [&::-webkit-media-controls-time-remaining-display]:text-ms-buttercream"
                      style={{
                        filter: 'invert(0.9) hue-rotate(180deg)',
                      }}
                      preload="metadata"
                    >
                      <source src="https://storage.googleapis.com/active-audio/boringhistory/HIST005.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <p className="text-ms-buttercream text-sm text-center lg:text-left">
                    Want unlimited bedtime stories?
                  </p>
                  <Link 
                    href="https://apps.apple.com/us/app/history-sleep/id6749167616"
                    className="px-6 py-3 bg-ms-orchid text-white rounded-xl font-semibold hover:bg-ms-fuschia transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                  >
                    📱 Get the App
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-lg text-ms-buttercream mb-8">
              Need something calming to help you drift off? These fascinating yet soothing historical facts are perfect for bedtime reading or listening. Each fact is carefully chosen to be interesting enough to distract your mind from daily stress, yet gentle enough to help you relax into sleep.
            </p>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Ancient Civilizations & Their Sleep Rituals
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">1. The Roman Siesta Tradition</h3>
                <p className="text-ms-buttercream">
                  The ancient Romans practiced biphasic sleep, taking a midday rest called "meridiari" during the hottest part of the day. This tradition continues in many Mediterranean countries today.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">2. Egyptian Dream Temples</h3>
                <p className="text-ms-buttercream">
                  Ancient Egyptians built special "sleep temples" where people would go to receive healing dreams. Priests would interpret these dreams as messages from the gods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">3. Greek Hypnos Worship</h3>
                <p className="text-ms-buttercream">
                  The Greeks worshipped Hypnos, the god of sleep, who lived in a cave where the river of forgetfulness flowed and where the sun never shone.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Medieval Sleeping Customs
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">4. The Great Bed of Ware</h3>
                <p className="text-ms-buttercream">
                  Built in 1590, this massive bed could supposedly fit 15 people and is now in the Victoria and Albert Museum. It measured 10 feet by 11 feet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">5. Segmented Sleep Patterns</h3>
                <p className="text-ms-buttercream">
                  Medieval Europeans commonly practiced "first sleep" and "second sleep," waking for an hour or two in the middle of the night for prayer, contemplation, or quiet activities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">6. Sleeping Upright</h3>
                <p className="text-ms-buttercream">
                  Many medieval Europeans slept in a semi-upright position, believing that lying flat would allow the devil to enter through their mouths.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Royal Bedchambers & Sleep
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">7. Louis XIV's Public Bedtime</h3>
                <p className="text-ms-buttercream">
                  The Sun King turned going to bed into a public ceremony called the "coucher," where nobles would watch him prepare for sleep.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">8. Queen Victoria's Nine-Hour Rule</h3>
                <p className="text-ms-buttercream">
                  Queen Victoria insisted on nine hours of sleep each night and popularized the idea of regular sleep schedules among the British upper class.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">9. Churchill's Afternoon Naps</h3>
                <p className="text-ms-buttercream">
                  Winston Churchill credited his productivity to his daily afternoon naps, saying they gave him two days in one.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Ancient Sleep Remedies
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">10. Lavender in Ancient Rome</h3>
                <p className="text-ms-buttercream">
                  Romans stuffed their pillows with lavender to promote restful sleep, a practice that continues today.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">11. Chinese Sleep Stones</h3>
                <p className="text-ms-buttercream">
                  Ancient Chinese nobility used cool jade pillows believing they would bring peaceful dreams and preserve youth.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">12. Native American Dreamcatchers</h3>
                <p className="text-ms-buttercream">
                  The Ojibwe people created dreamcatchers to filter out bad dreams, allowing only good dreams to pass through to the sleeper.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Historical Bedtime Stories
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">13. The Sandman's Origins</h3>
                <p className="text-ms-buttercream">
                  The folklore of the Sandman dates back to 1816 German literature, where he sprinkled sand in children's eyes to bring good dreams.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">14. Scheherazade's Thousand Tales</h3>
                <p className="text-ms-buttercream">
                  The Arabian Nights featured Scheherazade telling stories for 1,001 nights to save her life, creating the tradition of bedtime storytelling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">15. Brothers Grimm's Evening Tales</h3>
                <p className="text-ms-buttercream">
                  Many Grimm fairy tales were originally told at spinning bees during long winter evenings, meant to pass time before bed.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Fascinating Sleep Architecture
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">16. Japanese Futons</h3>
                <p className="text-ms-buttercream">
                  Traditional Japanese futons date back to the 17th century when cotton became more available, revolutionizing Japanese sleeping culture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">17. Murphy Beds of 1900</h3>
                <p className="text-ms-buttercream">
                  William Murphy invented the fold-up bed in San Francisco around 1900 to save space in his one-room apartment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">18. Victorian Sleeping Porches</h3>
                <p className="text-ms-buttercream">
                  In the early 1900s, sleeping on outdoor porches was prescribed as a cure for tuberculosis, leading to a nationwide trend.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Dreams in History
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">19. Lincoln's Prophetic Dream</h3>
                <p className="text-ms-buttercream">
                  Abraham Lincoln reportedly dreamed of his own death days before his assassination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">20. Mendeleev's Periodic Table</h3>
                <p className="text-ms-buttercream">
                  Dmitri Mendeleev claimed the periodic table came to him in a dream in 1869.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">21. Mary Shelley's Frankenstein</h3>
                <p className="text-ms-buttercream">
                  The idea for Frankenstein came to Mary Shelley in a waking dream during a ghost story competition.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Nighttime in Ancient Cities
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">22. Roman Night Watches</h3>
                <p className="text-ms-buttercream">
                  Ancient Rome had a corps of vigiles who patrolled the streets at night, acting as both firefighters and police.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">23. Medieval Curfew Bells</h3>
                <p className="text-ms-buttercream">
                  The word "curfew" comes from the French "couvre-feu" (cover fire), when bells would ring signaling time to extinguish fires and go to bed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">24. Gas Lamp Lighters</h3>
                <p className="text-ms-buttercream">
                  Before electricity, cities employed lamplighters who would light street lamps at dusk and extinguish them at dawn.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Historical Lullabies
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">25. Rock-a-Bye Baby's Dark Origins</h3>
                <p className="text-ms-buttercream">
                  This lullaby may reference the ancient practice of hanging cradles from tree branches, or political events in 17th century England.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">26. Brahms' Lullaby</h3>
                <p className="text-ms-buttercream">
                  Johannes Brahms wrote his famous lullaby in 1868 for a friend's new baby, and it became the world's most recognized bedtime song.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">27. Sumerian Lullabies</h3>
                <p className="text-ms-buttercream">
                  The oldest known lullaby was written in ancient Sumer around 2000 BCE, discovered on a clay tablet.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Bedroom Innovations Through Time
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">28. The Waterbed's Ancient Origins</h3>
                <p className="text-ms-buttercream">
                  The first waterbeds were goatskins filled with water, used by Persians around 3600 BCE.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">29. Spring Mattresses of 1871</h3>
                <p className="text-ms-buttercream">
                  Heinrich Westphal invented the innerspring mattress in 1871 but died in poverty as his patent was widely copied.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">30. Electric Blankets in WWII</h3>
                <p className="text-ms-buttercream">
                  Electric blankets were first used to keep pilots warm in unheated aircraft during World War II.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Quiet Historical Moments
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">31. The Christmas Truce of 1914</h3>
                <p className="text-ms-buttercream">
                  On Christmas Eve, World War I soldiers spontaneously ceased fighting and sang carols across the trenches.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">32. The Library of Alexandria's Night Scholars</h3>
                <p className="text-ms-buttercream">
                  Scholars at the ancient Library of Alexandria often worked through the night by oil lamp, advancing human knowledge in the quiet hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ms-orchid mb-2">33. Beethoven's Moonlight Sonata</h3>
                <p className="text-ms-buttercream">
                  Beethoven composed his Moonlight Sonata in 1801, inspired by moonlight shining on Lake Lucerne, creating one of history's most peaceful pieces.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-ms-white mt-12 mb-6">
              Sweet Dreams from History
            </h2>

            <p className="text-lg text-ms-buttercream mb-8">
              These historical facts remind us that humans have always sought peaceful rest and fascinating stories to ease into sleep. From ancient sleep temples to modern bedtime rituals, the quest for a good night's sleep connects us across centuries.
            </p>

            <div className="bg-gradient-to-r from-ms-periwinkle/30 to-ms-orchid/20 rounded-2xl p-8 mb-8 border border-ms-lavendar/20">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex-1 w-full">
                  <p className="text-ms-lavendar text-sm uppercase tracking-wide mb-2">
                    🌙 Full Episode - Perfect for Bedtime
                  </p>
                  <p className="text-ms-white font-bold text-xl mb-4">
                    "How Vikings Spent Their Time Between Raids"
                  </p>
                  <div className="bg-ms-nocturne/60 rounded-lg p-4 shadow-inner">
                    <audio 
                      controls 
                      className="w-full h-14 [&::-webkit-media-controls-panel]:bg-ms-eclipse [&::-webkit-media-controls-current-time-display]:text-ms-buttercream [&::-webkit-media-controls-time-remaining-display]:text-ms-buttercream"
                      style={{
                        filter: 'invert(0.9) hue-rotate(180deg)',
                      }}
                      preload="metadata"
                    >
                      <source src="https://storage.googleapis.com/active-audio/boringhistory/HIST005.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <div className="mt-3 flex items-center gap-4 text-sm text-ms-lavendar">
                      <span>💤 Designed to help you fall asleep</span>
                      <span>⏱️ Monotone narration</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 bg-ms-nocturne/40 rounded-xl p-6">
                  <p className="text-ms-white font-semibold text-center">
                    Get New Stories Every Night
                  </p>
                  <p className="text-ms-buttercream text-sm text-center mb-2">
                    AI-generated boring history lectures that never repeat
                  </p>
                  <Link 
                    href="https://apps.apple.com/us/app/history-sleep/id6749167616"
                    className="px-8 py-4 bg-gradient-to-r from-ms-orchid to-ms-fuschia text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    Download History Sleep
                  </Link>
                  <p className="text-xs text-ms-lavendar mt-2">
                    Free to try • iOS & Android
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-ms-periwinkle/20 to-ms-orchid/20 rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-ms-white mb-4">
                Ready to Fall Asleep to History?
              </h3>
              <p className="text-ms-buttercream mb-6">
                Download History Sleep and let these fascinating facts gently guide you to peaceful dreams.
              </p>
              <Link 
                href="https://apps.apple.com/us/app/history-sleep/id6749167616"
                className="inline-block px-8 py-3 bg-ms-orchid text-white rounded-xl font-semibold text-lg hover:bg-ms-fuschia transition-all transform hover:scale-105 shadow-lg"
              >
                Get the App
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-ms-nocturne border-t border-ms-blueberry/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image src="/full_logo.png" alt="History Sleep" width={24} height={24} className="object-contain" />
              <span className="text-white font-medium">History Sleep</span>
            </Link>
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