export const JTK_PHONE_DISPLAY = '+27(0)68 392 7937'
export const JTK_PHONE_LINK = 'tel:+27683927937'
export const JTK_EMAIL = 'jason@jtkspares.co.za'
export const JTK_WHATSAPP_NUMBER = '27683927937'
export const JTK_WHATSAPP_MESSAGE = 'Hi, I need assistance with spare parts.'

export const JTK_ADDRESS_LINES = [
  'Unit 11 Dunda Park',
  '23 Junction Road',
  'Parow Ind 7493',
] as const

export const JTK_ADDRESS_QUERY = `${JTK_ADDRESS_LINES.join(', ')}, Cape Town, South Africa`
export const JTK_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(JTK_ADDRESS_QUERY)}`
export const JTK_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(JTK_ADDRESS_QUERY)}&z=15&output=embed`
