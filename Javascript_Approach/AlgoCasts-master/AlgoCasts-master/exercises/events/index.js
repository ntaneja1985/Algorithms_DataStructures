// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  constructor() {
    this.eventRegistry = {};
  }

  on(eventName, callback) {
    if(this.eventRegistry[eventName]) {
      this.eventRegistry[eventName].push(callback);
    } else {
      this.eventRegistry[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
      if(this.eventRegistry[eventName]) {
        for(let callback of this.eventRegistry[eventName]) {
          callback();
        }
      }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if(this.eventRegistry[eventName]) {
      this.eventRegistry[eventName] = [];
    }
    //alternative is
    // delete this.evenRegistry[eventName]
  }
}

module.exports = Events;
