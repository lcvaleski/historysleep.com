import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'History Sleep Blog - Bedtime Stories & Sleep Tips',
  description: 'Explore articles about history facts to fall asleep to, free sleep story apps, and tips for better sleep with boring history.',
  keywords: 'sleep blog, history facts, bedtime stories, sleep tips, boring history',
}

export default function BlogListPage() {
  const articles = [
    {
      slug: 'roman-empire-sleep-stories',
      title: 'Roman Empire Sleep Stories: Why Ancient Rome Makes Perfect Bedtime Audio',
      description: 'Discover why Roman Empire sleep stories are the ultimate bedtime audio. From gladiator tales to emperor histories, ancient Rome provides endless calming narratives.',
      date: 'January 2025',
      readTime: '12 min read'
    },
    {
      slug: 'medieval-history-sleep-podcasts',
      title: 'Medieval History Sleep Podcasts: How Two-Sleep Cycles Inspire Modern Bedtime Stories',
      description: 'Explore medieval history sleep podcasts and the fascinating two-sleep cycle. Learn how medieval bedtime practices inspire modern sleep stories.',
      date: 'January 2025',
      readTime: '11 min read'
    },
    {
      slug: 'ancient-egypt-sleep-meditation',
      title: 'Ancient Egypt Sleep Meditation: Dream Temples to Modern Bedtime Stories',
      description: 'Discover ancient Egypt sleep meditation techniques from dream temples to modern bedtime stories. Learn how Egyptian sleep rituals help you fall asleep naturally.',
      date: 'January 2025',
      readTime: '13 min read'
    },
    {
      slug: 'free-sleep-story-apps-history-podcasts',
      title: 'Best Free Sleep Story Apps: History Podcasts to Fall Asleep To',
      description: 'Discover the best free sleep story apps featuring history facts to fall asleep to. Compare History Sleep\'s freemium model with other apps.',
      date: 'January 2025',
      readTime: '8 min read'
    },
    {
      slug: '33-history-facts-to-fall-asleep-to',
      title: '33 History Facts to Fall Asleep To',
      description: 'Discover 33 soothing history facts perfect for falling asleep. From ancient civilizations to fascinating historical tales that help you drift off peacefully.',
      date: 'December 2024',
      readTime: '10 min read'
    }
  ]

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

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-nocturne to-ms-eclipse">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-ms-white mb-4">
            History Sleep Blog
          </h1>
          <p className="text-lg text-ms-lavendar">
            Bedtime stories, sleep tips, and boring history to help you fall asleep
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block group"
              >
                <div className="bg-ms-eclipse/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-ms-lavendar/20 hover:border-ms-orchid/40 transition-all hover:shadow-xl">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-ms-white group-hover:text-ms-orchid transition-colors">
                      {article.title}
                    </h2>
                  </div>
                  <p className="text-ms-buttercream mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-ms-lavendar">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span className="ml-auto text-ms-orchid group-hover:text-ms-fuschia transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ms-eclipse to-ms-nocturne">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-ms-periwinkle/20 to-ms-orchid/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-ms-white mb-4">
              Ready to Fall Asleep to History?
            </h3>
            <p className="text-ms-buttercream mb-6">
              Download History Sleep and let boring history guide you to peaceful dreams.
            </p>
            <Link 
              href="https://apps.apple.com/us/app/history-sleep/id6749167616"
              className="inline-block px-8 py-3 bg-ms-orchid text-white rounded-xl font-semibold text-lg hover:bg-ms-fuschia transition-all transform hover:scale-105 shadow-lg"
            >
              Get the App
            </Link>
          </div>
        </div>
      </section>

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