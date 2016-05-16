// given an element and an event name, this function will trigger an event on that object
// of that name
function triggerEvent(element, eventName) {
    var event; // The custom event that will be created

    if (document.createEvent) {
        event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, true, true);
    } else {
        event = document.createEventObject();
        event.eventType = eventName;
    }

    event.eventName = eventName;
    if (document.createEvent) {
        object.dispatchEvent(event);
    } else {
        object.fireEvent("on" + event.eventType, event);
    }
}