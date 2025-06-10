/**
 * Utility functions for scroll behavior across the application
 */

/**
 * Scrolls to a specific element by ID with smooth behavior
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scrolls to the top of the page with smooth behavior
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Scrolls to the services section, handling both same-page and cross-page navigation
 * @param navigate - React Router navigate function
 * @param currentPath - Current pathname
 */
export const scrollToServices = (navigate?: (path: string, options?: any) => void, currentPath?: string): void => {
  if (currentPath === '/') {
    scrollToElement('services');
  } else if (navigate) {
    navigate('/', { state: { scrollToServices: true } });
  }
};

/**
 * Sets up viewport height fix for iOS devices
 */
export const setupViewportFix = (): (() => void) => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVh();
  window.addEventListener('resize', setVh);
  
  // Return cleanup function
  return () => window.removeEventListener('resize', setVh);
};