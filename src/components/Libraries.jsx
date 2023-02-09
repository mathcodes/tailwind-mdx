import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'
import logoJavaScript from '@/images/logos/javascript.png'
import logoReact from '@/images/logos/react.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoGithub from '@/images/logos/github.svg'
import logoNext from '@/images/logos/next.svg'

const libraries = [
  {
    href: '#',
    name: 'PHP',
    description:
      'A popular general-purpose scripting language that is especially suited to web development.',
    logo: logoPhp,
  },
  {
    href: '#',
    name: 'Ruby',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: logoRuby,
  },
  {
    href: '#',
    name: 'Node.js',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    logo: logoNode,
  },
  {
    href: '#',
    name: 'Python',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    logo: logoPython,
  },
  {
    href: '#',
    name: 'Go',
    description:
      'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
    logo: logoGo,
  },
  {
    href: '#',
    name: 'JavaScript',
    description:
      'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
    logo: logoJavaScript,
  },
  {
    href: '#',
    name: 'React',
    description:
      'React is a JavaScript library for building user interfaces.',
    logo: logoReact,
  },
  {
    href: '#',
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapidly building custom designs.',
    logo: logoTailwind,
  },
  {
    href: '#',
    name: 'Next.js',
    description:
      'The React Framework for Production — Build the best static and dynamic React apps with Next.js.',
    logo: logoNext,
  },
  {
    href: '#',
    name: 'GitHub',
    description:
      'GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 50 million developers.',
    logo: logoGithub,
  },  
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
