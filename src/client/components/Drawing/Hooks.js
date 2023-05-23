import { useRef, useEffect } from 'react'

export function useOnDraw(onDraw) {
  const canvasRef = useRef(null)
  const prevPointRef = useRef(null)
  const isDrawingRef = useRef(false)
  const mouseMoveListenerRef = useRef(null)
  const mouseUpListenerRef = useRef(null)

  function onMouseDown() {
    isDrawingRef.current = true
  }

  useEffect(() => {
    function computePointInCanvas(clientX, clientY) {
      if (canvasRef.current) {
        const boundingRect = canvasRef.current.getBoundingClientRect()
        return {
          x: clientX - boundingRect.left,
          y: clientY - boundingRect.top
        }
      } else {
        return null
      }
    }

    function initMouseMoveListener() {
      const mouseMoveListener = (event) => {
        if (isDrawingRef.current && canvasRef.current) {
          const point = computePointInCanvas(event.clientX, event.clientY)
          const ctx = canvasRef.current.getContext('2d')
          if (onDraw) onDraw(ctx, point, prevPointRef.current)
          prevPointRef.current = point
          console.log(point)
        }
      };
      mouseMoveListenerRef.current = mouseMoveListener
      window.addEventListener('mousemove', mouseMoveListener)
    }

    function initMouseUpListener() {
      const listener = () => {
        isDrawingRef.current = false
        prevPointRef.current = null
      };
      mouseUpListenerRef.current = listener
      window.addEventListener('mouseup', listener)
    }

    function removeListeners() {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener('mousemove', mouseMoveListenerRef.current)
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener('mouseup', mouseUpListenerRef.current)
      }
    }

    initMouseMoveListener()
    initMouseUpListener()

    return () => {
      removeListeners()
    };
  }, [onDraw])

  return {
    canvasRef,
    setCanvasRef: (ref) => {
      canvasRef.current = ref
    },
    onMouseDown
  };
}
