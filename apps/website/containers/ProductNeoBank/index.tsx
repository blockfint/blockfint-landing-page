import React from 'react'
import styled from 'styled-components'
import { ProductConclusion } from '@blockfint/website/components/productConclusion'
import { ProductDetail } from '@blockfint/website/components/productDetail'
import { IconWithInfoList } from './components/IconWithInfoList'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { useTranslation } from 'next-i18next'

export const ProductNeoBank = () => {
  const { t } = useTranslation()
  return (
    <>
      <ProductDetail
        {...{
          name: t('common.thinker-Suite'),
          title: t('common.neobank-quote'),
          description: t('work-details.neobank-desc'),

          secondaryTitle: t('work-details.neobank-secondary-title')
        }}
      >
        <IconWithInfoList />
      </ProductDetail>
      <ProductConclusion
        problem={t('work-details.neobank-problem-desc')}
        solution={t('work-details.neobank-solution-desc')}
      />
      <ContactBanner />
    </>
  )
}
