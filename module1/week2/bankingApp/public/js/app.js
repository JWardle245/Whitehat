// The Auth0 client, initialized in configureClient()
let auth0 = null;

/**
 * Starts the authentication flow
 */
const login = async (targetUrl) => {
  try {
    console.log("Logging in", targetUrl);

    const options = {
      redirect_uri: window.location.origin
    };

    if (targetUrl) {
      options.appState = { targetUrl };
    }

    await auth0.loginWithRedirect(options);
  } catch (err) {
    console.log("Log in failed", err);
  }
};

const balance = async (targetUrl) => {
  try {

    console.log("calling api");
    // Getting the access token from Auth0
    const accessToken = await auth0.getTokenSilently();
    const user = await auth0.getUser();
    console.log('token is:' +accessToken);
    console.log('user is:'+user);

    // Making the call to the API using the token
    const response = await fetch('http://localhost:8080/banking/balance', {
      method: 'GET',
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Getting the response and displaying it on the page
    const responseData = await response.text();
    console.log("response is: " + responseData);
    const responseElement = document.getElementById("api-call-result");
    responseElement.innerText = responseData;

} catch (e) {
    // Display errors in the console
    console.error(e);
  }
}

const transferForm = async (targetUrl) => {
  //Hide other form
  var hideForm = document.getElementById("orderForm");
  hideForm.style.display = "none";

  //Clear previous call response, and form
  var clear = document.getElementById("transfer-call-result");
  clear.innerText = "";
  document.getElementById("transferFormActual").reset();

  //Hide or display form
  var x = document.getElementById("transferForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const transfer = async (targetUrl) => {
  try {
    console.log("calling api");
    // Getting the access token from Auth0
    const accessToken = await auth0.getTokenSilently();
    const user = await auth0.getUser();
    console.log('token is:' +accessToken);
    console.log('user is:'+user);

    // Making the call to the API using the token
    const response = await fetch('http://localhost:8080/banking/transfer', {
      method: 'GET',
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Getting the response and displaying it on the page
    const responseData = await response.text();
    console.log("response is: " + responseData);
    const responseElement = document.getElementById("transfer-call-result");
    responseElement.innerText = responseData;

    

} catch (e) {
    // Display errors in the console
    console.error(e);
  }
}

const orderForm = async (targetUrl) => {
  //Make sure other form is hidden
  var hideForm = document.getElementById("transferForm");
  hideForm.style.display = "none";

  //Clear previous call response, and form
  var response = document.getElementById("create-order-call-result");
  response.innerText = "";
  document.getElementById("orderFormActual").reset();

  //Hide or display form
  var x = document.getElementById("orderForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const createOrder = async (targetUrl) => {
  try {

    console.log("calling api");
    // Getting the access token from Auth0
    const accessToken = await auth0.getTokenSilently();
    const user = await auth0.getUser();
    console.log('token is:' +accessToken);
    console.log('user is:'+user);

    // Making the call to the API using the token
    const response = await fetch('http://localhost:8080/banking/orders/new', {
      method: 'POST',
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Getting the response and displaying it on the page
    const responseData = await response.text();
    console.log("response is: " + responseData);
    const responseElement = document.getElementById("create-order-call-result");
    responseElement.innerText = responseData;

} catch (e) {
    // Display errors in the console
    console.error(e);
  }
}

const orders = async (targetUrl) => {
  try {

    console.log("calling api");
    // Getting the access token from Auth0
    const accessToken = await auth0.getTokenSilently();
    const user = await auth0.getUser();
    console.log('token is:' +accessToken);
    console.log('user is:'+user);

    // Making the call to the API using the token
    const response = await fetch('http://localhost:8080/banking/orders', {
      method: 'GET',
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Getting the response and displaying it on the page
    const responseData = await response.text();
    console.log("response is: " + responseData);
    const responseElement = document.getElementById("orders-call-result");
    responseElement.innerHTML = responseData + `<br>` + `<button id="btn-call-api"onclick="deleteOrder()"class="btn btn-primary btn-margin">DELETE</button>`;

} catch (e) {
    // Display errors in the console
    console.error(e);
  }
}

const deleteOrder = async (targetUrl) => {
  try {

    console.log("calling api");
    // Getting the access token from Auth0
    const accessToken = await auth0.getTokenSilently();
    const user = await auth0.getUser();
    console.log('token is:' +accessToken);
    console.log('user is:'+user);

    // Making the call to the API using the token
    const response = await fetch('http://localhost:8080/banking/orders/delete/01', {
      method: 'DELETE',
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Getting the response
    const responseData = await response.text();
    console.log("response is: " + responseData);
    orders();
    //const responseElement = document.getElementById("deleteOrder-call-result");
    //responseElement.innerText = responseData;

} catch (e) {
    // Display errors in the console
    console.error(e);
  }
}

/**
 * Executes the logout flow
 */
const logout = () => {
  try {
    console.log("Logging out");
    auth0.logout({
      returnTo: window.location.origin
    });
  } catch (err) {
    console.log("Log out failed", err);
  }
};

/**
 * Retrieves the auth configuration from the server
 */
const fetchAuthConfig = () => fetch("/auth_config.json");

/**
 * Initializes the Auth0 client
 */
const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
    audience: config.audience
  });
};

/**
 * Checks to see if the user is authenticated. If so, `fn` is executed. Otherwise, the user
 * is prompted to log in
 * @param {*} fn The function to execute if the user is logged in
 */
const requireAuth = async (fn, targetUrl) => {
  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    return fn();
  }

  return login(targetUrl);
};

// Will run when page finishes loading
window.onload = async () => {
  await configureClient();

  // If unable to parse the history hash, default to the root URL
  if (!showContentFromUrl(window.location.pathname)) {
    showContentFromUrl("/");
    window.history.replaceState({ url: "/" }, {}, "/");
  }

  const bodyElement = document.getElementsByTagName("body")[0];

  // Listen out for clicks on any hyperlink that navigates to a #/ URL
  bodyElement.addEventListener("click", (e) => {
    if (isRouteLink(e.target)) {
      const url = e.target.getAttribute("href");

      if (showContentFromUrl(url)) {
        e.preventDefault();
        window.history.pushState({ url }, {}, url);
      }
    }
  });

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    console.log("> User is authenticated");
    window.history.replaceState({}, document.title, window.location.pathname);
    updateUI();
    return;
  }

  console.log("> User not authenticated");

  const query = window.location.search;
  const shouldParseResult = query.includes("code=") && query.includes("state=");

  if (shouldParseResult) {
    console.log("> Parsing redirect");
    try {
      const result = await auth0.handleRedirectCallback();

      if (result.appState && result.appState.targetUrl) {
        showContentFromUrl(result.appState.targetUrl);
      }

      console.log("Logged in!");
    } catch (err) {
      console.log("Error parsing redirect:", err);
    }

    window.history.replaceState({}, document.title, "/");
  }

  updateUI();
};
