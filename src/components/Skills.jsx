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
import logoBootstrap from '@/images/skills/bootstrap.svg'
import logoDjango from '@/images/skills/django.svg'
import logoHtml from '@/images/skills/html.svg'
import logoCss from '@/images/skills/css.svg'
import logoTypeScript from '@/images/skills/typescript.svg'


const skills = [
  {
    name: 'HMTL',
    logo: logoHtml,
  },
  {
    name: 'CSS',
    logo: logoCss,
  },
  {
    name: 'JavaScript',
    logo: logoJavaScript,
  },
  {
    name: 'TypeScript',
    logo: logoTypeScript,
  },
  {
    name: 'React',
    logo: logoReact,
  },
  {
    name: 'Tailwind CSS',
    logo: logoTailwind,
  },
  {
    name: 'Next.js',
    logo: logoNext,
  },
  {
    name: 'Node.js',
    logo: logoNode,
  },
  {
    name: 'Python',
    logo: logoPython,
  },
  {
    name: 'GitHub',
    logo: logoGithub,
  },  
  {
    name: 'bootstrap',
    logo: logoBootstrap,
  },
  {
    name: 'Django',
    logo: logoDjango,
  },
]

export function Skills() {
  return (
    <div className="my-16 xl:max-w-none">

      <div className="not-prose mt-4 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-4 xl:max-w-none xl:grid-cols-6">
        {skills.map((skill) => (
            <Image
              src={skill.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
        ))}
      </div>
    </div>
  )
}
