import { AnimatePresence } from '@tamagui/animate-presence'
import { useIsIntersecting } from '@tamagui/demos'
import { useTint } from '@tamagui/logo'
import { NextLink } from 'components/NextLink'
import { memo, useEffect, useRef, useState } from 'react'
import {
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Heading,
  Paragraph,
  TextProps,
  XStack,
  YStack,
  useDidFinishSSR,
} from 'tamagui'

import { ContainerLarge } from './Container'
import { HomeH2 } from './HomeH2'

const families = ['silkscreen', 'mono', 'heading']

export const HeroTypography = memo(() => {
  const [family, setFamily] = useState(`silkscreen`)
  const ref = useRef<any>()
  const isIntersecting = useIsIntersecting(ref)

  useEffect(() => {
    if (!isIntersecting) {
      return
    }
    const next = () => {
      setFamily((cur) => {
        return families[(families.indexOf(cur) + 1) % families.length]
      })
    }
    const tm = setInterval(next, 4200)
    next()
    return () => {
      clearInterval(tm)
    }
  }, [isIntersecting])

  return (
    <>
      <YStack fullscreen className="" o={0.1} />
      {/* -5 my to fir grid nicely */}
      <ContainerLarge my={-5} position="relative" space="$8">
        <YStack ref={ref} ai="center" space="$3">
          <HomeH2>
            Beautifully expressive font systems with{' '}
            <span className="clip-text rainbow">rhythm</span>.
          </HomeH2>
        </YStack>

        <XStack
          ai="center"
          jc="center"
          pos="relative"
          space="$8"
          flexDirection="row-reverse"
          $sm={{
            flexDirection: 'column-reverse',
          }}
        >
          <OverlayCard />

          <YStack
            h={300}
            w="40%"
            space="$0.5"
            jc="center"
            scale={1.1}
            x={-20}
            y={5}
            $sm={{ y: 0, miw: '110%', ai: 'center', x: 0, scale: 0.9 }}
          >
            <YStack ai="flex-end" contain="paint layout" h={270}>
              <AnimatePresence exitBeforeEnter>
                <AnimatedHeading
                  key={`${family}1`}
                  index={0}
                  Component={H1}
                  family={family}
                  color="$pink10"
                >
                  Swappable
                </AnimatedHeading>
                <AnimatedHeading
                  key={`${family}2`}
                  index={1}
                  Component={H2}
                  family={family}
                  color="$blue10"
                >
                  typed, compiled
                </AnimatedHeading>
                <AnimatedHeading
                  key={`${family}3`}
                  index={2}
                  Component={H3}
                  family={family}
                  color="$purple10"
                >
                  custom per-size
                </AnimatedHeading>
                <AnimatedHeading
                  key={`${family}4`}
                  index={3}
                  Component={H4}
                  family={family}
                  color="$green10"
                >
                  premade or custom
                </AnimatedHeading>
                <AnimatedHeading
                  key={`${family}5`}
                  index={4}
                  Component={H5}
                  family={family}
                  color="$orange10"
                >
                  easy to author
                </AnimatedHeading>
                <AnimatedHeading
                  key={`${family}6`}
                  index={5}
                  Component={H6}
                  family={family}
                  color="$red10"
                >
                  font themes
                </AnimatedHeading>
              </AnimatePresence>
            </YStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </>
  )
})

const OverlayCard = () => {
  const { tint } = useTint()

  // {/* TODO elevation not overriding? */}
  return (
    <Card bw={1} boc="$borderColor" br="$6" elevation="$6" shadowRadius={60}>
      <YStack
        jc="center"
        p="$6"
        space="$5"
        maw="calc(min(90vw, 400px))"
        $sm={{ p: '$5' }}
      >
        <Paragraph ta="left" size="$8" fow="400" ls={-1}>
          Use, swap and share fonts with typed vertical rhythm.
        </Paragraph>

        <Paragraph ta="left" size="$6" theme="alt2" fow="400">
          Typed, sizable fonts with control over every facet - weight, spacing,
          line-height, letter-spacing, color and more.
        </Paragraph>

        <NextLink href="/docs/core/configuration">
          <Button
            accessibilityLabel="Fonts docs"
            fontFamily="$silkscreen"
            als="flex-end"
            theme={tint as any}
          >
            Fonts &raquo;
          </Button>
        </NextLink>
      </YStack>
    </Card>
  )
}

const AnimatedHeading = memo(
  ({
    Component,
    children,
    family,
    index,
    ...rest
  }: {
    family: string
    Component: typeof Heading
    children: any
    index: number
  } & TextProps) => {
    return (
      <Delay by={index * 180}>
        <Component
          animation="lazy"
          enterStyle={{ o: 0, y: -10 }}
          exitStyle={{ o: 0, y: 10 }}
          o={1}
          y={0}
          pr="$1"
          my="$1"
          $sm={{
            pr: 0,
          }}
          fontFamily={`$${family}`}
          textShadowColor="$shadowColorFocus"
          textShadowRadius={3}
          textShadowOffset={{ width: 0, height: 3 }}
          ellipse
          {...rest}
        >
          {children}
        </Component>
      </Delay>
    )
  }
)

const Delay = ({ children, by }) => {
  const isMounted = useDidFinishSSR()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setDone(true), by)
    return () => clearTimeout(showTimer)
  })

  return !isMounted || !done ? null : children
}
