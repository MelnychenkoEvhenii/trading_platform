import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  handler: PropTypes.func,
  toCapture: PropTypes.bool,
}

const defaultProps = {
  toCapture: false,
}

export const OutSideClickHandler = props => {
  const { handler, children, className, toCapture } = props

  const wrapperRef = useRef(null)

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }
      document.addEventListener('mousedown', listener, toCapture)
      document.addEventListener('touchstart', listener, toCapture)
      return () => {
        document.removeEventListener('mousedown', listener, toCapture)
        document.removeEventListener('touchstart', listener, toCapture)
      }
    }, [ref, handler])
  }

  useOnClickOutside(wrapperRef, handler)

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  )
}

OutSideClickHandler.propTypes = propTypes
OutSideClickHandler.defaultProps = defaultProps
