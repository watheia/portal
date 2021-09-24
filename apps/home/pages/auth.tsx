import styles from "./auth.module.css"
import { Auth, Card, Typography, Space } from "@supabase/ui"
import { redirectAuth, supabaseClient } from "@watheia/auth"

/* eslint-disable-next-line */
export interface AuthProps {}

export function AuthPage(props: AuthProps) {
  redirectAuth()
  return (
    <div className={styles.page}>
      <div className="authcontainer">
        <Card>
          <Space direction="vertical" size={8}>
            <div>
              <Typography.Title level={3}>Watheia Gatekeeper</Typography.Title>
            </div>
            <Auth
              supabaseClient={supabaseClient}
              providers={["google", "github"]}
              view={"sign_in"}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
          </Space>
        </Card>
      </div>
    </div>
  )
}

export default AuthPage
