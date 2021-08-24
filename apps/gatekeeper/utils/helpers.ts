export const getURL = (): string => {
  const url =
    process?.env?.URL && process.env.URL !== ""
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ""
      ? process.env.VERCEL_URL
      : "http://localhost:3000"
  return url.includes("http") ? url : `https://${url}`
}

export const postData = async ({ url, token, data = {} }): Promise<any> => {
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
    body: JSON.stringify(data)
  })

  if (res["error"]) {
    throw res["error"]
  }

  return res.json()
}

export const toDateTime = (secs: number): Date => {
  const t = new Date("1970-01-01T00:30:00Z") // Unix epoch start.
  t.setSeconds(secs)
  return t
}
