export const ga_event = ({ action, category, label, value }: any) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
}


export const gaButtonClick = (buttonName: string) => {
  return ga_event({ action: 'click', category: 'Button', label: buttonName, value: null })
}