import { Component, ReactNode } from "react"
import styles from "./Button.module.scss"
import clsx from "clsx"

const noop = () => void 0

export type ButtonProps = {
  /**
   * loader to show while button is busy. Turns on when onClick returns a promise (until it resolves), or when `loading={true}`.
   */
  loader?: ReactNode
  /**
   * explicitly toggle loader on and off
   */
  loading?: boolean

  /**
   * allow clicking on button even while loading. (i.e. make simultaneous triggers)
   */
  activeWhenLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type LoaderProps = React.HTMLAttributes<HTMLSpanElement>

function DotsLoader({ className, ...rest }: LoaderProps) {
  return (
    <span {...rest} className={clsx(className, styles.dotsLoader)}>
      <span>●</span>
      <span>●</span>
      <span>●</span>
    </span>
  )
}

/**
 * Base button, with very basic styles. Accepts all parameters of native html button.
 *
 * If onClick returns a promise, BaseButton will show a loader automatically, until the promise is resolved or rejected.
 * @example
 * <Button onClick={() => api.submitUserData()} loader={<CustomLoader/> } />
 */
export class Button extends Component<ButtonProps> {
  state = { isLoading: false }
  private activePromises = new Set<Promise<any>>()
  private unmounted = false

  static defaultProps = {
    loader: <DotsLoader />,
    loading: false
  }

  componentWillUnmount() {
    this.unmounted = false
    this.activePromises = new Set<Promise<any>>()
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick } = this.props
    if (!onClick) return

    this.setState({ isLoading: true })

    const promise = Promise.resolve(onClick.call(this, event)).catch(noop)
    this.activePromises.add(promise)

    promise.then(() => this.handleResolve(promise))
  }

  private handleResolve(p: Promise<any>) {
    if (this.unmounted) return

    this.activePromises.delete(p)
    if (this.activePromises.size === 0) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const {
      onClick,
      className,
      children,
      loader,
      loading,
      disabled,
      activeWhenLoading = false,
      ...rest
    } = this.props

    // ignore internal state when component is controlled
    const isLoading = (loading !== undefined && loading) || this.state.isLoading

    const content = isLoading ? loader : children
    const disabledByLoading = isLoading && !activeWhenLoading

    return (
      <button
        data-bit-id="teambit.base-ui/input/button"
        {...rest}
        disabled={disabled || disabledByLoading}
        onClick={this.handleClick}
        className={clsx(className, styles.button)}
      >
        {content}
      </button>
    )
  }
}

export default Button
