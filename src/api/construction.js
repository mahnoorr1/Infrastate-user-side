import Axios from "./connect";

export const getConstructionPlans = async () => {
    try {
      const response = await Axios.get('/Construction/getConstructionPlans');
      return response.data; 
    } catch (error) {
       
      
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/Admin/Login';
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
      
      return null; 
    }
  };

export const getOnePlan = async (Pid) => {
    try {
      const response = await Axios.get(`/Construction/getOnePlan/${Pid}`);
      return response.data; 
    } catch (error) {
       
      
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/Admin/Login';
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
      
      return null; 
    }
  };

export const getReportOfConstruction = async (longitude , 
                                                latitude , 
                                                Contstruction_Type,
                                                Plot_Measurment) => {
    try {
      const response = await Axios.post(`/Construction/getReportOfConstruction` , 
                                                {
                                                    longitude , 
                                                    latitude , 
                                                    Contstruction_Type,
                                                    Plot_Measurment
                                            });
      return response.data; 
    } catch (error) {
       
      
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
          window.location.href = '/Admin/Login';
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
      
      return null; 
    }
  };