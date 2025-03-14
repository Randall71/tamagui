import { getDefaultLayout } from '@lib/getDefaultLayout'
import { authors } from '@data/authors'
import { getAllFrontmatter } from '@lib/mdx'
import { useTint } from '@tamagui/logo'
import { ChevronRight } from '@tamagui/lucide-icons'
import { NextLink } from 'components/NextLink'
import { NextSeo } from 'next-seo'
import { useMemo } from 'react'
import { ScrollView } from 'react-native'
import {
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  Image,
  Paragraph,
  Spacer,
  XStack,
  YStack,
} from 'tamagui'

import { Card } from '../components/Card'
import { ContainerLarge } from '../components/Container'
import { FlatBubbleCard } from '../components/FlatBubbleCard'
import { GithubIcon } from '../components/GithubIcon'
import { SocialLinksRow } from '../components/SocialLinksRow'

export default function Community({ frontmatters }) {
  return (
    <CommunityLayout>
      <NextSeo
        title="Community — Tamagui"
        description="Tamagui's latest news and discussions."
        openGraph={{
          url: 'https://tamagiu.dev/community',
        }}
      />

      <Spacer size="$4" />

      <ContainerLarge space="$4">
        <Spacer />

        <H1 als="center">Community</H1>

        <Spacer />

        <SocialLinksRow />

        <Spacer />

        <XStack $sm={{ flexDirection: 'column' }}>
          <FlatBubbleCard w="50%" $sm={{ w: 'auto' }} ai="center" bw={0}>
            <NextLink href="/blog">
              <Button
                bc="transparent"
                boc="$borderColor"
                bw={1}
                mt="$-3"
                size="$6"
                iconAfter={ChevronRight}
                br="$10"
              >
                <H2 cur="pointer" size="$9" ta="center">
                  The Blog
                </H2>
              </Button>
            </NextLink>
            <Spacer />
            <YStack w="100%" space>
              {frontmatters.map((frontmatter) => (
                <NextLink key={frontmatter.title} href={frontmatter.slug}>
                  <Card bc="transparent" p="$4" f={1}>
                    <YStack space="$2">
                      <H3
                        fontFamily="$silkscreen"
                        size="$6"
                        color="$color"
                        cursor="pointer"
                      >
                        {frontmatter.title}
                      </H3>

                      <XStack ai="center" space="$2">
                        <Paragraph
                          cursor="inherit"
                          tag="time"
                          size="$5"
                          theme="alt2"
                          fow="300"
                        >
                          {Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            year: 'numeric',
                            day: 'numeric',
                          }).format(new Date(frontmatter.publishedAt || ''))}
                        </Paragraph>
                        <Paragraph cursor="inherit" theme="alt2" size="$4" fow="300">
                          &nbsp;by {authors[frontmatter.by].name}
                        </Paragraph>
                      </XStack>
                    </YStack>
                  </Card>
                </NextLink>
              ))}
            </YStack>
          </FlatBubbleCard>

          <Spacer size="$4" />

          <FlatBubbleCard ai="center" feature bw={0} className="hero-gradient">
            <H2 size="$9" ta="center">
              Design Kit
            </H2>
            <Spacer size="$2" />
            <YStack ai="center" space>
              <H4 size="$5">Figma Design Kit</H4>
              <NextLink href="https://www.figma.com/community/file/1125992524818379922">
                <YStack
                  target="_blank"
                  rel="noopener noreferrer"
                  br="$5"
                  overflow="hidden"
                  bw={0.5}
                  boc="$borderColor"
                >
                  <Image
                    animation="quick"
                    cur="pointer"
                    shac="$shadowColor"
                    shar="$4"
                    hoverStyle={{
                      scale: 1.2,
                      borderColor: '$color',
                    }}
                    o={0.5}
                    source={{
                      uri: '/sponsors/design-kit.jpg',
                      width: 1466 * 0.25,
                      height: 776 * 0.25,
                    }}
                  />
                </YStack>
              </NextLink>
            </YStack>
          </FlatBubbleCard>
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0.5} space>
          <H3 id="starter-repos" ta="center">
            Starter repos
          </H3>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack py="$2" space="$4">
              <StarterRepoCard
                url="https://github.com/srikanthkh/tamagui-cna"
                name="create-next-app"
                author="srikanthkh"
              />

              <StarterRepoCard
                url="https://github.com/srikanthkh/tamagui-cra"
                name="create-react-app"
                author="srikanthkh"
              />

              <StarterRepoCard
                url="https://github.com/criszz77/luna"
                name="Luna template"
                author="criszz77"
              />

              <StarterRepoCard
                url="https://github.com/chen-rn/create-universal-app"
                name="create-universal-app"
                author="Chen"
              />

              <StarterRepoCard
                url="https://github.com/tamagui/tamagui/tree/master/apps/site"
                name="tamagui.dev"
                author="nate"
              />

              <StarterRepoCard
                url="https://github.com/ivopr/tamagui-expo"
                name="Tamagui Expo"
                author="Ivo"
              />

              <StarterRepoCard
                url="https://github.com/dohomi/tamagui-kitchen-sink"
                name="Kitchen Sink with Storybook"
                author="dohomi"
              />

              <StarterRepoCard
                url="https://github.com/ebg1223/t3-tamagui"
                name="Tamagui t3"
                author="ebg1223"
              />
            </XStack>
          </ScrollView>
        </FlatBubbleCard>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" ta="center" className="rainbow clip-text">
            Gold Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space spaceDirection="both" flexWrap="wrap">
          <GoldSponsor
            name="Manifold Finance"
            link="https://www.manifoldfinance.com"
            image="/sponsors/manifold.png"
            imageWidth={100}
            imageHeight={100}
          />
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" ta="center">
            Bronze Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space spaceDirection="both" flexWrap="wrap">
          <GoldSponsor
            name="Bounty"
            link="https://bounty.co"
            image="/sponsors/bounty.png"
            imageWidth={100}
            imageHeight={100}
          />
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" ta="center">
            Indie Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space spaceDirection="both" flexWrap="wrap">
          <GoldSponsor
            name="CodingScape"
            link="https://codingscape.com"
            image="/sponsors/coding-scape.png"
            imageWidth={566 * 0.35}
            imageHeight={162 * 0.35}
          />
          <GoldSponsor
            name="Quest Portal"
            link="https://www.questportal.com"
            image="/sponsors/quest-portal.png"
            imageWidth={200 * 0.3}
            imageHeight={200 * 0.3}
          />
          <GoldSponsor
            name="BeatGig"
            link="https://beatgig.com"
            image="/sponsors/beatgig.jpg"
            imageWidth={400 * 0.5}
            imageHeight={84 * 0.5}
          />
          <GoldSponsor
            name="Pineapples.dev"
            link="http://pineapples.dev"
            image="/sponsors/pineapple.jpg"
            imageWidth={520 * 0.5}
            imageHeight={186 * 0.5}
          />
        </XStack>

        <Spacer />

        <FlatBubbleCard bw={0}>
          <H2 size="$9" ta="center">
            Early Sponsors
          </H2>
        </FlatBubbleCard>

        <XStack space flexWrap="wrap">
          <IndividualSponsor
            name="@barelyreaper"
            link="https://twitter.com/barelyreaper"
          />
          <IndividualSponsor name="@pontusab" link="https://twitter.com/pontusab" />
          <IndividualSponsor name="@AntelaBrais" link="https://twitter.com/AntelaBrais" />
          <IndividualSponsor name="Hirbod" link="https://twitter.com/nightstomp" />
          <IndividualSponsor name="Dimension" link="https://twitter.com/joindimension" />
        </XStack>
      </ContainerLarge>

      <Spacer size="$10" />
    </CommunityLayout>
  )
}

const StarterRepoCard = ({
  author,
  name,
  url,
}: {
  url: string
  name: string
  author: string
}) => {
  return (
    <Card
      f={1}
      fb={0}
      maw={300}
      space="$2"
      tag="a"
      href={url}
      target="_blank"
      p="$5"
      jc="space-between"
    >
      <YStack space="$2">
        <GithubIcon />
        <H4 cursor="pointer" fontFamily="$silkscreen" ls={0}>
          {name}
        </H4>
      </YStack>
      <Paragraph cursor="pointer" theme="alt2">
        by {author}
      </Paragraph>
    </Card>
  )
}

Community.getLayout = getDefaultLayout

function GoldSponsor(props: {
  name: string
  link: string
  image: string
  imageWidth: number
  imageHeight: number
}) {
  return (
    <FlatBubbleCard mb="$4" flat p={0}>
      <NextLink href={props.link} target="_blank">
        <YStack
          ai="center"
          jc="center"
          f={1}
          cursor="pointer"
          target="_blank"
          p="$8"
          br="$4"
          space
        >
          <Image
            accessibilityLabel={props.name}
            source={{
              uri: props.image,
              height: props.imageHeight,
              width: props.imageWidth,
            }}
          />
          <H5 cursor="inherit" als="center" letterSpacing={4} ai="center">
            {props.name}
          </H5>
        </YStack>
      </NextLink>
    </FlatBubbleCard>
  )
}

function IndividualSponsor(props: { name: string; link: string }) {
  return (
    <FlatBubbleCard flat mb="$4">
      <YStack maxWidth="100%" fs={0} als="center">
        <XStack space="$4" $sm={{ flexDirection: 'column' }}>
          <NextLink href={props.link} target="_blank">
            <YStack
              cursor="pointer"
              p="$4"
              br="$4"
              hoverStyle={{ bc: 'rgba(0,0,0,0.1)' }}
              pressStyle={{ bc: 'rgba(0,0,0,0.2)' }}
              space
            >
              <H5 cursor="inherit" als="center" letterSpacing={4} ai="center">
                {props.name}
              </H5>
            </YStack>
          </NextLink>
        </XStack>
      </YStack>
    </FlatBubbleCard>
  )
}

function CommunityLayout({ children }: { children: any }) {
  const { tint } = useTint()
  return <YStack theme={tint as any}>{useMemo(() => children, [children])}</YStack>
}

export function getStaticProps() {
  const frontmatters = getAllFrontmatter('blog')
  const sortedFrontmatters = frontmatters.sort(
    (a, b) =>
      Number(new Date(b.publishedAt || '')) - Number(new Date(a.publishedAt || ''))
  )
  return { props: { frontmatters: sortedFrontmatters.slice(0, 3) } }
}
