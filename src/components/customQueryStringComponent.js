import React from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"

const CustomQueryStringComponent = ({ search }) => {
  const { custom } = search
  const { url } = "peepul://--/detail/"+{custom}
  console.log(url)
  return window.location.replace(url)
}

CustomQueryStringComponent.propTypes = {
  search: PropTypes.object,
}

export default withLocation(CustomQueryStringComponent)