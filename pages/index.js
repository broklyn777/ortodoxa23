/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import projectsData from '@/data/projectsData'
import NewsletterForm from '@/components/NewsletterForm'
import Card2 from '@/components/Card2'

import Image from 'next/image'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [isPlaying, setIsPlaying] = useState(true)
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="  divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Ortodoxa
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
            {siteMetadata.description}
          </p>
        </div>

        <div className=" h-full">
          <div>
            <div className="absolute top-0 left-0 -z-10 hidden h-[100vh] w-screen opacity-20 dark:block">
              <Image layout="fill" alt="" src="/static/ortodoxa/rökelse-03.jpg" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((d) => (
            <Card2
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>

        {siteMetadata.newsletter.provider !== '' && (
          <div className="my-10 mx-auto flex max-w-md items-center justify-center rounded-md bg-gray-100 pb-8 pt-4 dark:bg-gray-800">
            <NewsletterForm />
          </div>
        )}

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12 ">
                <article>
                  <div className="space-y-2 rounded-md p-4 dark:bg-gray-500/10 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Publiserad den</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none  text-gray-500 dark:text-gray-100">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Läs mer &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            Alla artiklar &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
