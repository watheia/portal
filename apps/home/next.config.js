// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx")
const withMdx = require("@next/mdx")({
  extension: /\.mdx?$/
})

const isProd = process.env.NODE_ENV === "production"

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/corporate",
        permanent: isProd
      },
      {
        source: "/home",
        destination: "/corporate",
        permanent: isProd
      }
    ]
  }
}

module.exports = withNx(withMdx(nextConfig))
