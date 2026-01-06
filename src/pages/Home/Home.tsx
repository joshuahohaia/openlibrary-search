import styled from 'styled-components'
import { Hero } from '@/components/Hero'
import { FeaturesSection } from '@/components/FeaturesSection'
import { LuckySection } from '@/components/LuckySection'
import { HowItWorks } from '@/components/HowItWorks'
import { theme } from '@app/theme'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SectionSpacer = styled.div`
  height: ${theme.spacing.xxl};
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  text-align: center;
  min-height: 50vh; 
  /* Add some bottom margin to separate from the next section if not using spacer */
  margin-bottom: ${theme.spacing.xl};
`

export function Home() {
  return (
    <Container>
      <HeroSection>
        <Hero />
      </HeroSection>

      <LuckySection />

      <SectionSpacer />

      <FeaturesSection />

      <SectionSpacer />

      <HowItWorks />

      <SectionSpacer />
    </Container>
  )
}