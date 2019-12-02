import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = ({
  root = null,
  rootMargin,
  threshold = 0
}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const [isIntersected, setisIntersected] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => updateEntry(entry),
      {
        root,
        rootMargin,
        threshold
      }
    );

    const { current: currentObserver } = observer;

    if (node) {
      currentObserver.observe(node);
      if (entry.isIntersecting) {
        setisIntersected(true);
        currentObserver.disconnect();
      }
    } else {
      currentObserver.disconnect();
    }
  }, [entry, node, root, rootMargin, threshold]);

  return [setNode, isIntersected];
};

export default useIntersectionObserver;