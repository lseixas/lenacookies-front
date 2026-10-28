export type MenuItem = {
  name: string
  description: string
  price: string
}

export type MenuCategory = {
  title: string
  items: MenuItem[]
}

/** Conteúdo alinhado aos cardápios reais (cardapio1 preços + cardapio2 descrições). */
export const menuCategories: MenuCategory[] = [
  {
    title: 'Tradicionais',
    items: [
      {
        name: 'Massa Tradicional',
        description:
          'Massa tradicional com gotas de chocolate (ao leite, branco, 50% ou mistas).',
        price: 'R$ 5,00',
      },
      {
        name: 'Massa de Chocolate',
        description:
          'Massa de chocolate com gotas (ao leite, branco, 50% ou mistas).',
        price: 'R$ 5,50',
      },
    ],
  },
  {
    title: 'Gourmet',
    items: [
      {
        name: 'Limão',
        description: 'Massa tradicional, gotas brancas e raspas de limão.',
        price: 'R$ 6,00',
      },
      {
        name: 'Red Velvet',
        description: 'Massa vermelha com gotas brancas ou mistas.',
        price: 'R$ 6,00',
      },
      {
        name: 'Ovomaltine',
        description: 'Massa tradicional com Ovomaltine.',
        price: 'R$ 6,00',
      },
    ],
  },
  {
    title: 'Recheados',
    items: [
      {
        name: 'Red Velvet',
        description:
          'Massa vermelha, gotas brancas e recheio de brigadeiro de cream cheese.',
        price: 'R$ 8,50',
      },
      {
        name: 'Dois Amores',
        description:
          'Massa de chocolate, gotas brancas e recheio de brigadeiro branco.',
        price: 'R$ 7,50',
      },
    ],
  },
  {
    title: 'Fitness',
    items: [
      {
        name: 'Banana com aveia',
        description:
          'Massa de banana com aveia e canela, gotas de chocolate 50% e recheio de doce de leite. Embalagem com 10 unidades.',
        price: 'R$ 35,00',
      },
    ],
  },
]

export const contacts = {
  instagramHandle: '@docemordida.gru',
  instagramUrl: 'https://instagram.com/docemordida.gru',
  whatsappDisplay: 'WhatsApp (11) 98879-5097',
  whatsappUrl: 'https://wa.me/5511988795097',
}
