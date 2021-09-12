import {
  HeroSection,
  ServerlessSection,
  FeaturesSection,
  TestimonialSection,
  StatsSection,
  CtaSection
} from "@watheia/view.corporate"
import { useUser } from "@watheia/supa.auth"

const Home = () => {
  console.log("Initializing app context...")
  // const [session, setSession] = useState<AuthSession | null>(null)
  // const [profiles, setProfiles] = useState<Profile[]>([])

  // useEffect(() => {
  //   // wait for initialization
  //   if (!supabase) return
  //   // listen for remote data updates
  //   console.info("...")
  //   setSession(supabase.auth.session())
  //   supabase.auth.onAuthStateChange((event: string, session: AuthSession | null) => {
  //     console.info(`~~~> ${event}`)
  //     setSession(session)
  //   })
  // }, [])

  // useEffect(() => {
  //   api.getPublicProfiles()
  // }, [])

  return (
    <>
      <HeroSection />
      <ServerlessSection />
      <FeaturesSection />
      <TestimonialSection />
      <StatsSection />
      <CtaSection />
    </>
  )
}

export default Home
