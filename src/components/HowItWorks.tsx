import {
  Section,
  Container,
  Header,
  SectionTitle,
  SectionSubtitle,
  Steps,
  Step,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  Connector,
} from './HowItWorks.styles'

const STEPS = [
  {
    title: 'Search for any book',
    description: 'Type a title, author, or keyword into the search bar. Results appear instantly as you type.',
  },
  {
    title: 'Explore the details',
    description: 'Click on any result to see rich metadata, descriptions, and subject tags from Open Library.',
  },
  {
    title: 'Find your copy',
    description: 'Ready to read? Jump directly to Amazon or Open Library to purchase or borrow the book.',
  },
]

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <Header>
          <SectionTitle>How it works</SectionTitle>
          <SectionSubtitle>
            From search to shelf in three simple steps
          </SectionSubtitle>
        </Header>

        <Steps>
          {STEPS.map((step, index) => (
            <div key={index}>
              <Step>
                <StepNumber>{index + 1}</StepNumber>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
              </Step>
              {index < STEPS.length - 1 && <Connector />}
            </div>
          ))}
        </Steps>
      </Container>
    </Section>
  )
}
