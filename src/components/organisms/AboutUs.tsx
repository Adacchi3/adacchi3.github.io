import Container from '@components/atoms/Container'
import { useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import React from 'react'
import SimpleFormat from 'src/lib/SimpleFormat'

const AboutUs: React.VFC = () => {
  const locale = useLocale()
  const { data } = useTopQuery({
    variables: {
      preview: Boolean(process.env.PREVIEW),
      locale: locale,
      authorId: String(process.env.AUTHOR_ID),
    },
  })

  return (
    <Container>
      <div className="p-6 bg-gray-50">
        <div className="mb-4 text-center opacity-90">
          <div className="block relative">
            <img
              alt="profile-icon"
              src={String(data?.me?.image?.url)}
              className="object-cover mx-auto w-40 h-40 rounded-full"
              loading="lazy"
              height="160"
              width="160"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl">{data?.me?.name}</p>
          <p className="text-xl text-gray-600">{data?.me?.nickname}</p>
          <p className="py-4 md:mx-20 text-center text-gray-600">
            <SimpleFormat text={String(data?.me?.description)} />
          </p>
        </div>
        <div className="text-center text-gray-700 border-t">
          <ul className="mt-4">
            {data?.contacts?.items.map((contact, index) => {
              return (
                <li key={index}>
                  {contact?.link ? (
                    <>
                      {contact?.media}:{' '}
                      <a
                        href={contact?.link}
                        className="text-blue-600 hover:underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {contact?.account}
                      </a>
                    </>
                  ) : (
                    <>
                      {contact?.media}: {contact?.account}
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default AboutUs
