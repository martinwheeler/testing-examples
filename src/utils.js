/**
 * Simple fetch wrapper to make calling fetch less tedious.
 * @param {*} url
 * @param {*} options
 */
const simpleFetch = {
  post: (url = "http://localhost:3001/create", options = {}) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(options.body ? options.body : {}),
      ...options
    }),
  get: (url, options) =>
    fetch(url, {
      method: "GET",
      ...options
    })
};

export { simpleFetch };
