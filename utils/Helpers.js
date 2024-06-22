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

  export const formatSlug = (slug) => {
    if (typeof slug === "string" && slug.includes("%20")) {
      return slug.replace(/%20/g, "-");
    }
    return slug;
  };

  export function formatDate(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return 'Invalid Date';
    }

    // Get the month, day, and year
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();

    // Get the hours and minutes
    let hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);

    // Determine am/pm
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format the time as HH:MM am/pm
    const formattedTime = ("0" + hours).slice(-2) + ':' + minutes + ' ' + ampm;

    // Format the final date string as MM/DD/YYYY HH:MM am/pm
    return `${month}/${day}/${year} ${formattedTime}`;
}