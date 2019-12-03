import { useState, useEffect } from 'react'

const useModalSmooth = (nodeRef) => {
  const [isShowing, setIsShowing] = useState(false);
  const [nodeData, setNodeData] = useState(null);

  function toggle() {
    setIsShowing(!isShowing);
  }

  useEffect(() => {
    setNodeData({
      top: nodeRef && nodeRef.current.offsetTop,
      left: nodeRef && nodeRef.current.offsetLeft,
      width: nodeRef && nodeRef.current.offsetWidth,
      height: nodeRef && nodeRef.current.offsetHeight,
    })
  }, [nodeRef])


  return {
    isShowing,
    toggle,
    nodeData
  }
}

export default useModalSmooth