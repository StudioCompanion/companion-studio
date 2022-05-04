import Script from 'next/script'

export const WidgetPlausible = () => {
  if (!process.env.NEXT_PUBLIC_ENABLE_PLAUSIBLE) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        defer
        data-domain="companion.studio"
        src="https://plausible.io/js/plausible.js"
      />
      <Script
        strategy="afterInteractive"
        defer
        dangerouslySetInnerHTML={{
          __html: /* js */ `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
          `,
        }}
      />
    </>
  )
}
