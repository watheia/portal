import { Channel, Greeting, Payload, Principal } from "./types"

export class LoginRequest {
  constructor(public token: string) {}

  submit(): Promise<Principal | Error> {
    throw "TODO: not implemented"
  }
}

export class MessageRequest {
  constructor(public from: Principal, public to: Channel, public message: Payload) {}
  submit(): Promise<Greeting | Error> {
    throw "TODO: not implemented"
  }
}
