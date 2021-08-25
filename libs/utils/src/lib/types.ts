export interface Product {
  id: any
  active: any
  name: any
  description: any
  images: any[]
  metadata: any
}

export interface PricingPeriod {
  interval: any
  interval_count: any
  trial_period_days: any
}

export interface Pricing {
  id: any
  product: any
  active: any
  currency: any
  nickname: any
  type: any
  unit_amount: any
  recurring: PricingPeriod
  metadata: any
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
