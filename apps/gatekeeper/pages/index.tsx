/* This example requires Tailwind CSS v2.0+ */

import { Page } from "@waweb/layout"

// export const getStaticProps = async () => {
//   return {
//     props: {
//       title: "Page/Site Title",
//       user: {
//         name: "Guest",
//         email: "guest@watheia.app",
//         imageUrl: "https://cdn.watheia.org/assets/icon.png"
//       },
//       userNavigation: [
//         { name: "Account", href: "/account" },
//         { name: "Profile", href: "/profile" },
//         { name: "Sign in", href: "/signin" }
//       ],
//       navigation: [
//         { name: "Home", href: "/home", current: true },
//         { name: "Blog", href: "/blog", current: false },
//         { name: "Contact", href: "/contact", current: false }
//       ],
//       social: [
//         {
//           name: "Facebook",
//           href: "https://facebook.com/watheialabs",
//           icon: "facebook"
//         },
//         {
//           name: "Instagram",
//           href: "#",
//           icon: "instagram"
//         },
//         {
//           name: "Twitter",
//           href: "#",
//           icon: "twitter"
//         },
//         {
//           name: "GitHub",
//           href: "https://github.com/watheia",
//           icon: "github"
//         }
//       ]
//     }
//   }
// }

const Index = (props) => (
  <Page>
    <div className="relative">
      <div className="text-lg max-w-prose mx-auto">
        <h1>
          <span className="block text-base text-center text-aqua-600 font-semibold tracking-wide uppercase">
            Introducing
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-shark-900 sm:text-4xl">
            JavaScript for Beginners
          </span>
        </h1>
        <p className="mt-8 text-xl text-shark-500 leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
          mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam
          nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
        </p>
      </div>
      <div className="mt-6 prose prose-aqua prose-lg text-shark-500 mx-auto">
        <p>
          Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed{" "}
          <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis
          id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
          risus enim. <a href="/home/contact">Mattis mauris semper</a> sed amet vitae sed
          turpis id.
        </p>
        <ul role="list">
          <li>Quis elit egestas venenatis mattis dignissim.</li>
          <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
          <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
        </ul>
        <p>
          Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec
          commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo,
          elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo
          tincidunt turpis. Amet, duis sed elit interdum dignissim.
        </p>
        <h2>From beginner to expert in 30 days</h2>
        <p>
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
          arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
          vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
          Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
          ipsum eu a sed convallis diam.
        </p>
        <blockquote>
          <p>
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
            consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
            morbi.
          </p>
        </blockquote>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
          mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
          penatibus risus viverra tellus varius sit neque erat velit.
        </p>
        <figure>
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
            width={1310}
            height={873}
          />
          <figcaption>
            Sagittis scelerisque nulla cursus in enim consectetur quam.
          </figcaption>
        </figure>
        <h2>Everything you need to get up and running</h2>
        <p>
          Purus morbi dignissim senectus mattis <a href="/">adipiscing</a>. Amet, massa quam
          varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
          tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis
          fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
          congue erat ac. Cras fermentum convallis quam.
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
          mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
          penatibus risus viverra tellus varius sit neque erat velit.
        </p>
      </div>
    </div>
  </Page>
)

export default Index
