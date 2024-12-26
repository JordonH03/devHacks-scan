'use client'

import { Box, Container, Flex, SegmentedControl, Skeleton } from '@radix-ui/themes'
import { useState } from 'react'

export default function Home () {
  const [scanMode, setScanMode] = useState('check-in')
  const [meal, setMeal] = useState<string | undefined>(undefined)

  const handleSetScanMode = (mode: string) => {
    if (mode === 'verify' && !meal) {
      handleSetMeal('d1-lunch')
      setMeal('d1-lunch')
    }
    setScanMode(mode)
  }

  const handleSetMeal = (meal: string) => {
    setMeal(meal)
    console.log('Set meal to', meal)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-8">
      <Box>
        <Flex align="center" direction="column" gap="8">
          <Box>
            <Skeleton loading={true}>
              <Box height="256px" width="256px"/>
            </Skeleton>
          </Box>
          <Container>
            <Flex direction="column" gap="4" width="320px">
              <SegmentedControl.Root className="w-full" defaultValue="check-in" size="3" variant="classic" onValueChange={handleSetScanMode}>
                <SegmentedControl.Item value="check-in">Check-in</SegmentedControl.Item>
                <SegmentedControl.Item value="verify">Verify</SegmentedControl.Item>
              </SegmentedControl.Root>
              {
                scanMode === 'verify' && (
                  <SegmentedControl.Root defaultValue={meal} size="3" onValueChange={handleSetMeal}>
                    <SegmentedControl.Item value="d1-lunch">D1 Lunch</SegmentedControl.Item>
                    <SegmentedControl.Item value="d1-dinner">D1 Dinner</SegmentedControl.Item>
                    <SegmentedControl.Item value="d2-lunch">D2 Lunch</SegmentedControl.Item>
                  </SegmentedControl.Root>
                )
              }
            </Flex>
          </Container>
        </Flex>
      </Box>
    </main>
  )
}
