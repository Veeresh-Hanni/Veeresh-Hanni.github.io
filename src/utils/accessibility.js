/**
 * Accessibility Utilities
 * Provides helper functions and attributes for WCAG 2.1 AA compliance
 */

export const ariaLabels = {
    // Navigation
    mainNav: {
        'role': 'navigation',
        'aria-label': 'Main Navigation',
    },

    // Headings
    pageHeading: (text) => ({
        'id': 'page-heading',
        'role': 'heading',
        'aria-level': '1',
    }),

    sectionHeading: (text, level = 2) => ({
        'role': 'heading',
        'aria-level': level,
    }),

    // Interactive Elements
    button: (label) => ({
        'role': 'button',
        'aria-label': label,
        'tabIndex': 0,
    }),

    link: (label) => ({
        'role': 'link',
        'aria-label': label,
    }),

    externalLink: (label) => ({
        'role': 'link',
        'aria-label': `${label} (opens in new window)`,
        'target': '_blank',
        'rel': 'noopener noreferrer',
    }),

    // Lists
    list: {
        'role': 'list',
    },

    listItem: {
        'role': 'listitem',
    },

    // Sections & Regions
    heroSection: {
        'role': 'region',
        'aria-label': 'Hero Section',
    },

    projectsSection: {
        'role': 'region',
        'aria-label': 'Selected Projects',
    },

    skillsSection: {
        'role': 'region',
        'aria-label': 'Technical Skills',
    },

    experienceSection: {
        'role': 'region',
        'aria-label': 'Work Experience',
    },

    contactSection: {
        'role': 'region',
        'aria-label': 'Contact Information',
    },

    // Status & Live Regions
    liveRegion: {
        'aria-live': 'polite',
        'aria-atomic': 'true',
        'role': 'status',
    },

    alertMessage: {
        'role': 'alert',
        'aria-live': 'assertive',
    },

    // Form Elements
    textInput: (label) => ({
        'aria-label': label,
        'type': 'text',
    }),

    emailInput: (label) => ({
        'aria-label': label,
        'type': 'email',
        'inputMode': 'email',
    }),

    textArea: (label) => ({
        'aria-label': label,
        'role': 'textbox',
        'aria-multiline': 'true',
    }),

    // Badges and Tags
    badge: (text) => ({
        'role': 'status',
        'aria-label': text,
    }),

    // Cards and Containers
    card: (title) => ({
        'role': 'article',
        'aria-label': title,
    }),

    // Images
    decorativeImage: {
        'alt': '',
        'aria-hidden': 'true',
    },

    meaningfulImage: (description) => ({
        'alt': description,
        'role': 'img',
    }),
};

/**
 * Helper to get skip link for keyboard navigation
 */
export const skipLink = {
    className: 'skip-link',
    href: '#main-content',
    'aria-label': 'Skip to main content',
};

/**
 * Keyboard navigation helpers
 */
export const keyboardHelpers = {
    // Check if Enter or Space is pressed
    isActivationKey: (event) => {
        return event.key === 'Enter' || event.key === ' ';
    },

    // Check if Escape is pressed
    isEscapeKey: (event) => {
        return event.key === 'Escape';
    },

    // Check if Tab is pressed
    isTabKey: (event) => {
        return event.key === 'Tab';
    },

    // Check if Arrow keys are pressed
    isArrowKey: (event) => {
        return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key);
    },
};

/**
 * Color contrast checker (simple utility)
 * Returns true if contrast ratio is acceptable for WCAG AA (4.5:1)
 */
export const isAccessibleContrast = (bgColor, fgColor) => {
    const getLuminance = (color) => {
        const rgb = color.match(/\d+/g);
        if (!rgb) return 0.5;

        const [r, g, b] = rgb.map(x => {
            const c = parseInt(x) / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });

        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const l1 = getLuminance(bgColor);
    const l2 = getLuminance(fgColor);
    const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

    return contrast >= 4.5;
};

/**
 * Focus management utilities
 */
export const focusManagement = {
    // Set focus to element
    setFocus: (element) => {
        if (element) {
            element.focus();
        }
    },

    // Get first focusable element in container
    getFirstFocusableElement: (container) => {
        return container?.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
    },

    // Get last focusable element in container
    getLastFocusableElement: (container) => {
        const focusableElements = container?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        return focusableElements?.[focusableElements.length - 1];
    },

    // Trap focus within container (useful for modals)
    trapFocus: (event, container) => {
        if (event.key !== 'Tab') return;

        const firstElement = focusManagement.getFirstFocusableElement(container);
        const lastElement = focusManagement.getLastFocusableElement(container);
        const isTabbing = !event.shiftKey;

        if (isTabbing && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
        } else if (!isTabbing && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
        }
    },
};

/**
 * Announcement utility for screen readers
 */
export const announceToScreenReader = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
        announcement.remove();
    }, 1000);
};

/**
 * Utility CSS class for screen-reader-only content
 * Add this to your CSS:
 * .sr-only {
 *   position: absolute;
 *   width: 1px;
 *   height: 1px;
 *   padding: 0;
 *   margin: -1px;
 *   overflow: hidden;
 *   clip: rect(0, 0, 0, 0);
 *   white-space: nowrap;
 *   border-width: 0;
 * }
 */

export default {
    ariaLabels,
    skipLink,
    keyboardHelpers,
    isAccessibleContrast,
    focusManagement,
    announceToScreenReader,
};
