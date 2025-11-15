import { useCallback } from 'react';

interface UseSmoothScrollReturn {
  scrollTo: (elementId: string, offset?: number, duration?: number) => void;
}

// Simple, efficient easing function for smooth acceleration/deceleration
const easeInOutCubic = (t: number): number => {
  // Clamp t to [0, 1]
  t = Math.max(0, Math.min(1, t));
  
  // Ease-in-out cubic: slow start, fast middle, slow end
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Smooth scroll animation using requestAnimationFrame
const animateScroll = (
  startPosition: number,
  targetPosition: number,
  duration: number
): void => {
  const distance = targetPosition - startPosition;
  
  // Early exit if no distance to travel
  if (Math.abs(distance) < 0.5) {
    return;
  }

  let startTime: number | null = null;
  let animationFrameId: number | null = null;

  const animate = (currentTime: number) => {
    // Initialize start time on first frame
    if (startTime === null) {
      startTime = currentTime;
    }

    // Calculate elapsed time and progress (0 to 1)
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Apply easing function for smooth acceleration/deceleration
    const easedProgress = easeInOutCubic(progress);

    // Calculate current position
    const currentPosition = startPosition + distance * easedProgress;

    // Scroll to current position (round to integer for performance)
    window.scrollTo({
      top: Math.round(currentPosition),
      behavior: 'auto'
    });

    // Continue animation if not complete
    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      // Ensure exact target position at end
      window.scrollTo({
        top: Math.round(targetPosition),
        behavior: 'auto'
      });
      animationFrameId = null;
    }
  };

  // Start animation on next frame
  animationFrameId = requestAnimationFrame(animate);
};

export const useSmoothScroll = (): UseSmoothScrollReturn => {
  const scrollTo = useCallback(
    (
      elementId: string,
      offset: number = 0,
      duration: number = 1500
    ): void => {
      // Retry logic for finding element
      const maxRetries = 10;
      const retryDelay = 50;
      let retries = 0;

      const attemptScroll = () => {
        const element = document.getElementById(elementId);

        if (!element) {
          retries++;
          
          if (retries < maxRetries) {
            console.log(
              `⏳ Element "${elementId}" not found, retry ${retries}/${maxRetries}...`
            );
            setTimeout(attemptScroll, retryDelay);
          } else {
            console.error(
              `❌ Element "${elementId}" not found after ${maxRetries} attempts`
            );
          }
          return;
        }

        // Element found - calculate positions
        console.log(`✓ Element found, starting smooth scroll...`);

        // Get current scroll position
        const startPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        // Get element position relative to document
        const elementRect = element.getBoundingClientRect();
        const elementTop =
          elementRect.top + startPosition;

        // Calculate target position with offset
        const targetPosition = elementTop - offset;

        console.log(
          `Scrolling from ${startPosition}px to ${targetPosition}px (offset: ${offset}px, duration: ${duration}ms)`
        );

        // Start smooth scroll animation
        animateScroll(startPosition, targetPosition, duration);
      };

      // Start with small delay to ensure DOM is ready
      setTimeout(attemptScroll, 50);
    },
    []
  );

  return { scrollTo };
};
