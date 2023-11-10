import axios from 'axios';

//going to get all the data here to use on rest of the app.

//define base URL and initialise with a URL.
const baseUrl = 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/';

// create an axios instance,insert an object & define the baseURL & headers 
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

//create endpoint object in the event there is more than one endpoint. In this case, the baseUrl is our endpoint
export const apiEndpoint = {
  getAllData: baseUrl,
};

/*[-] get all the data from the api endpoint with this funtion.
  [-] we use asyc/await as we are making a call to a promise & want to do other things before our fetch resolves
  [-] try catch statement for exception handling 
  [-] function is exported as a module to be used in other JS files*/

export const getAllData = async () => {
  try {
    const response = await api.get(apiEndpoint.getAllData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
