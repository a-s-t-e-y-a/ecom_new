export const customLocalStorage = {
    getItem(key) {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error(`Error getting item from localStorage: ${error}`);
        return null;
      }
    },
  
    setItem(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting item in localStorage: ${error}`);
      }
    },
  
    removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing item from localStorage: ${error}`);
      }
    },
  
    clear() {
      try {
        localStorage.clear();
      } catch (error) {
        console.error(`Error clearing localStorage: ${error}`);
      }
    }
  };