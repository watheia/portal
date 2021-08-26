export interface Product {
  id: string | number
  active: boolean
  name: string
  description: string
  images: string[]
  metadata: Record<string, any>
}

export interface PricingPeriod {
  interval: 12 | 1
  interval_count: number
  trial_period_days: number
}

export interface Pricing {
  id: string | number
  product: Product
  active: boolean
  currency: "USD" | "PESO" | "BITCOIN"
  nickname: "string"
  type: "string"
  unit_amount: number
  recurring: PricingPeriod
  metadata: Record<string, any>
}

export interface Stakeholder {
  uuid: string
  name: string
  email?: string
}

export interface Principal {
  id: any
}

export interface Payload {
  url: string
  token: string
  data: Record<string, any>
}
