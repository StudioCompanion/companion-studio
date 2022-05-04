export enum EventNames {
  CharityLinks = 'Charity Links',
  CarouselClick = 'Carousel Click',
  NewsletterActivation = 'Newsletter Activation',
  NewsletterSubmission = 'Newsletter Submission',
  SocialClick = 'Social Click',
  CareersClick = 'Careers Click',
}

type EventFactory<
  TEventName extends EventNames,
  TAdditionalProps extends object = object
> = {
  name: TEventName
  additionalProps?: TAdditionalProps
}

type CharityLinkEvent = EventFactory<
  EventNames.CharityLinks,
  {
    charity: string
  }
>

type CarouselClickEvent = EventFactory<
  EventNames.CarouselClick,
  {
    caseStudy: string
  }
>

type NewsletterActivationEvent = EventFactory<
  EventNames.NewsletterActivation,
  {
    page: string
  }
>

type NewsletterSubmissionEvent = EventFactory<
  EventNames.NewsletterSubmission,
  {
    page: string
  }
>

type SocialClickEvent = EventFactory<
  EventNames.SocialClick,
  {
    social: 'LinkedIn' | 'Instagram' | 'Twitter'
  }
>

type CareersClick = EventFactory<EventNames.CareersClick>

type Events =
  | CharityLinkEvent
  | CarouselClickEvent
  | NewsletterActivationEvent
  | NewsletterSubmissionEvent
  | SocialClickEvent
  | CareersClick

export const firePlausibleEvent = (event: Events) => {
  if (window.plausible) {
    window.plausible(event.name, { props: event.additionalProps })
  }
}
