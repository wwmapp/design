import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isServerRendering } from '../../_util/dom';
import useIsFirstRender from '../../_hooks/useIsFirstRender';

export interface PortalProps {
  /** Portal 挂载的容器 */
  getContainer: () => HTMLElement;
  children?: React.ReactNode;
}

function Portal(props: PortalProps): React.ReactPortal | null {
  const { getContainer, children } = props;
  const containerRef = useRef<HTMLElement | null>();
  const isFirstRender = useIsFirstRender();

  if ((isFirstRender || containerRef.current === null) && !isServerRendering) {
    containerRef.current = getContainer();
  }

  useEffect(
    () => () => {
      const container = containerRef.current;
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
        containerRef.current = null;
      }
    },
    []
  );
  return containerRef.current ? ReactDOM.createPortal(children, containerRef.current) : null;
}

export default Portal;
