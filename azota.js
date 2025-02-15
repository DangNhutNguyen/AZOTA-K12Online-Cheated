function removeAllEventListeners(target, eventTypes) {
    try {
        eventTypes.forEach(eventType => {
            const listeners = getEventListeners(target)[eventType];
            if (listeners) {
                listeners.forEach(listener => {
                    target.removeEventListener(eventType, listener.listener);
                });
            }
        });
        console.log("Removed all - Done by NGUYEN HUYNH DANG NHUT");
    } catch (error) {
        console.error("An error occurred: Could not remove event listeners. Error details:", error);
    }
}

const eventTypes = [
    'beforeunload', 'blur', 'click', 'DOMContentLoaded', 'hashchange',
    'keydown', 'load', 'locationchange', 'message', 'mousedown',
    'orientationchange', 'popstate', 'resize', 'scroll', 'touchstart',
    'visibilitychange'
];

// Remove event listeners from window and document
removeAllEventListeners(window, eventTypes);
removeAllEventListeners(document, eventTypes);
