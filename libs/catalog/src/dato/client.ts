import tiny from "tiny-json-http"

export interface RequestParams {
  query: string
  variables: Record<string, unknown>
  preview?: boolean
}
/**
 *
 */
export class DatoCms {
  constructor(private _token: string) {
    if (!this._token)
      throw new Error("missing NEXT_PUBLIC_DATOCMS_API_TOKEN environment variable")
  }

  /**
   *
   * @param param0 Generic api request
   * @returns
   */
  async request({ query, variables, preview = false }: RequestParams): Promise<any> {
    const endpoint = preview
      ? `https://graphql.datocms.com/preview`
      : `https://graphql.datocms.com/`

    const { body } = await tiny.post({
      url: endpoint,
      headers: {
        authorization: `Bearer ${this._token}`
      },
      data: {
        query,
        variables
      }
    })

    if (body.errors) {
      console.error("Ouch! The query has some errors!")
      throw body.errors
    }

    return body.data
  }
}

export default DatoCms
