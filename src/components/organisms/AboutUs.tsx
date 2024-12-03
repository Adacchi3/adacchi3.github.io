import Container from '@components/atoms/Container'
import { useTopQuery } from '@graphql/generated/graphql'
import { useLocale } from '@hooks/Locale'
import React from 'react'
import SimpleFormat from 'src/lib/SimpleFormat'

const AboutUs: React.FC = () => {
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
      <div className="bg-gray-50 p-6">
        <div className="mb-4 text-center opacity-90">
          <div className="relative block">
            <img
              alt="profile-icon"
              src={String(data?.me?.image?.url)}
              className="mx-auto h-40 w-40 rounded-full object-cover"
              loading="lazy"
              height="160"
              width="160"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl">{data?.me?.name}</h1>
          <p className="text-gray-600 text-xl">{data?.me?.nickname}</p>
          <p className="py-4 text-center text-gray-600 md:mx-20">
            <SimpleFormat text={String(data?.me?.description)} />
          </p>
        </div>
        <div className="border-t text-center text-gray-700">
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
