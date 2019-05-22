class storageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    this.store[key] = undefined;
  }
}

global.localStorage = new storageMock();
global.sessionStorage = new storageMock();

// React also depends on requestAnimationFrame (even in test environments).
// A simple shim for testing environments would be:
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

