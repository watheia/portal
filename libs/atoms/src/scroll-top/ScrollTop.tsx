import useScrollTrigger from "@mui/material/useScrollTrigger"
import Fab from "@mui/material/Fab"
import { KeyboardArrowUp } from "@mui/icons-material"
import Zoom from "@mui/material/Zoom"

const ScrollTop = (): JSX.Element => {
  // const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (): void => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className="scroll-top">
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  )
}

export default ScrollTop
