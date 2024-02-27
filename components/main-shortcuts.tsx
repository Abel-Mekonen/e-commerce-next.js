import { ShortcutItem } from '@/components/shortcut'
import React, { FC } from 'react'

type Props = {
  shortcuts: any[]
}

export const Shortcuts: FC<Props> = ({shortcuts}) => {
  return (
    <div className="
      py-[16px] grid grid-cols-5
      gap-y-[24px] gap-x-[12px]
      lg:flex lg:flex-row lg:justify-center lg:justify-between
    ">
      {shortcuts.map((item, index) => <ShortcutItem key={index} shortcut={item}/>)}
    </div>
  )
}
