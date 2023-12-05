import Axios from "./connect";
let baseURL = '/Alert'

export const getAlerts = async () => {

    try {
      const response = await Axios.get(`${baseURL}/getAlerts`);
      return response.data;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

export const getOneAlert = async (aid) => {

    try {
      const response = await Axios.get(`${baseURL}/getOneAlert/${aid}`);
      return response.data;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/';
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
          window.location.href = '/Home';
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

  
