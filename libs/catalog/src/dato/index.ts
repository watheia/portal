export type { RequestParams } from "./client"
import { DatoCms } from "./client"

export const datoClient = new DatoCms(process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN)
export default datoClient
