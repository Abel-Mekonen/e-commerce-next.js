/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'

type Props = {
  product: any
}

export const CollectionProduct: FC<Props> = ({product}) => {
  const detail = product.publication

  return (
    <div className='w-[186px]'>
      <div className='relative'>
        <img src={detail.media[0]?.uri} alt='' className='rounded-md'/>
        <div className='absolute z-2 bottom-0 ml-[4px] mb-[4px]'>
          {detail.tagsOnImage.map((item: string, key: number) => {
            return (
              <div
                key={key}
                className='
                  bg-[#009e8a]
                  text-white
                  text-medium
                  rounded-[2px]
                  text-[12px]
                  tracking-[-.3px]
                  flex
                  flex-row
                  p-[4px]
                '
              >
                <img
                  className='mr-[2px]'
                  src="https://www.testvalley.kr/common/return-new.svg"
                  alt=""/>
                <div>{item}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='
        text-[13px] mt-[4px] leading-[21px]
        h-[42px] overflow-hidden break-all
        text-ellipsis line-clamp-2
      '>
        {detail.title}
      </div>
      <div className='mt-[8px] font-semibold text-[15px] text-[#424242]'>
        <span className='text-[#ff5023]'>{detail.priceInfo.discountRate}%</span>
        {detail.priceInfo.price.toLocaleString()}
        <span className='font-medium text-[10px]'>원</span>
      </div>
      {detail.tagsOnDesc.length > 0 && detail.tagsOnDesc.map((item:string, key: string) => {
        return (
          <div
            key={key}
            className='
              mt-[8px] inline-block text-[#eb1c1c]
              py-[3px] px-[4px] font-semibold text-[10px]
              leading-[10px] tracking-[-.3px] bg-[#fff7f7]
          '>
            {item}
          </div>
        )
      })}
      <div className='flex flex-row text-[11px] font-medium mt-[8px] text-[#666666]'>
        <img src="https://www.testvalley.kr/star/star-darkgray.svg" alt="별점" width="12px" height="12px"/>
        {detail.rating}
      </div>
      {detail.preface && detail.prefaceIconUrl && (
        <div
          className='
            mt-[8px]
            text-[12px]
            py-[4px] px-[6px]
            inline-flex flex-row items-center
            border rounded-[2px]
            border-[#eeeeee]
          '
        >
          <img className='w-[14px] h-[14px] mr-[3px]' src={detail.prefaceIconUrl} alt=""/>
          {detail.preface}
        </div>
      )}
    </div>
  )
}
