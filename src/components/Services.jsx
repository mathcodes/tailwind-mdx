import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const services = [
  {
    headingRef: '/webdev',
    name: 'Website and App Development',
    description: 'Create or update a website or app for your business.',
  },
  {
    headingRef: '/socialmedia',
    name: 'Social Media Marketing & Branding',
    description: 'Utilize social media to grow your business.',
  },
  {
    headingRef: '/seo',
    name: 'SEO & Content Marketing',
    description:
      'Increase your website\’s search engine ranking with SEO best practices.',
  },
  {
    headingRef: '/education',
    name: 'Training & Education',
    description:
      'Remote training and education for your team or organization.'
  },
]

export function Services() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="services">
        
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.headingRef} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
