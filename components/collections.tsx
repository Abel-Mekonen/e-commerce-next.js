import { Collection } from '@/components/collection'
import React, { FC } from 'react'

type Props = {
  collections: any[],
  className?: string
}

export const Collections: FC<Props> = ({collections, className}) => {
  return (
    <div className={`${className} `}>
      {collections.map((item, key) => <Collection key={key} collection={item}/>)}
    </div>
  )
}
