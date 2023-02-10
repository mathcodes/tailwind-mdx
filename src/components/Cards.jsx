import { LinkIcon } from '../components/icons/LinkIcon'
import { GitHubIcon } from './icons/GitHubIcon'
import { Image } from 'next/image'

const people = [
  {
    name: 'Content For Developers',
    description: 'Open-source project created and maintained by me with a growing list of over 20 contributors. A site with education and learning as a top priority. Utilizing the power of open-source contributors to offer the most diverse collection of learning tools for coding.',
    imageUrl:
      'https://www.contentfordevelopers.com/CforD2.png',
    gitHubUrl: 'https://www.github.com/mathcodes/contentfordevelopers',
    liveUrl: '#',
    page: 'contentfordevelopers',
  },
  {
    name: 'TypeScript Tags Todo',
    description: 'This is an advanced to-do list using TypeScript and React. Users have the ability to filter, create, delete, edit and update their notes. Fully responsive and written with clean, easy to understand code!',
    imageUrl:
      'https://raw.githubusercontent.com/mathcodes/typescript-tags-todo/main/src/assets/images/TS-todo-home.png',
    gitHubUrl: 'https://github.com/mathcodes/typescript-tags-todo',
    liveUrl: 'https://typescript-tags-todo.vercel.app/',
  },
  {
    name: 'Demo Marketing App',
    description: 'A demo marketing application built with React, Typescript, TailwindCSS, and deployed with Vercel.',
    imageUrl:
      'https://raw.githubusercontent.com/mathcodes/marketing-app/main/public/images/screenshot-1.png',
    gitHubUrl: 'https://github.com/mathcodes/marketing-app',
    liveUrl: 'https://marketing-app-demo.vercel.app/',
  },
  {
    name: 'Leonard Krasner',
    description: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    gitHubUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'Leonard Krasner',
    description: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    gitHubUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'Leonard Krasner',
    description: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    gitHubUrl: '#',
    liveUrl: '#',
  },
  // More people...
]

export default function Cards() {
  return (
    <div className="bg-none py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <ul
          description="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:grid-cols-3 lg:gap-8 list-none"
        >
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-gray-100 drop-shadow-lg dark:bg-gray-600 py-10 px-8">

              <Image className="mx-auto h-48 w-48 md:h-56 md:w-56" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-400">{person.description}</p>
              <div description="list" className="mt-6 flex justify-around gap-x-6 list-none text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                <div>
                  <a href={person.gitHubUrl} className="text-pink-600 hover:text-black dark:hover:text-white">
                   <GitHubIcon />
                  </a>
                </div>
                <div>
                  <a href={person.liveUrl} className="text-pink-600 hover:text-black dark:hover:text-white">
                   <LinkIcon />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
