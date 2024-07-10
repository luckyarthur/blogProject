import React from 'react';
import { createPortal } from 'react-dom';

import { X as Close } from 'react-feather';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';

import VisuallyHidden from '../VisuallyHidden';
import styles from './Modal.module.css';

interface ModalProp {
  title: string;
  handleDismiss: () => {};
}

function Modal({ title, children, handleDismiss }: React.PropsWithChildren<ModalProp>) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): any {
      if (event.code === 'Escape') {
      handleDismiss();
      }
    }
   
    window.addEventListener('keydown', handleKeyDown);
   
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);

  return createPortal(
  <FocusLock returnFocus={true}>
  <RemoveScroll>
    <div className={styles.wrapper}>
          <div
            className={styles.backdrop}
            onClick={handleDismiss}
          />
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close />
              <VisuallyHidden>
                Dismiss modal
              </VisuallyHidden>
            </button>
            <h2>{title}</h2>
            {children}
          </div>
        </div>
  </RemoveScroll>
  </FocusLock>,
  document.body
  );
}

export default Modal;
