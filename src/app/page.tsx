import { NextPage } from 'next'

import { Landing } from '@/components'
import { Tariff } from '@/common'

const Page: NextPage = async () => {
  const data: Response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/Test/GetTariffs`)
  const tariffs: Tariff[] = await data.json()

  return <Landing tariffs={tariffs} />
}

export default Page
