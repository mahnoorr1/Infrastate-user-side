import Axios from "./connect";

export const registerUser = async(
                                firstname, 
                                lastname, 
                                email,
                                password,
                                Image,
                                phoneNumber,
                                SubscriptionStatus 
                                ) => {
    try {
        const response = await Axios.post(`/users/signup` , {firstname, 
                                                            lastname, 
                                                            email,
                                                            password,
                                                            Image,
                                                            phoneNumber,
                                                            SubscriptionStatus });
      return response.status; 
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

}

export const loginUser = async (email, password) => {



    try {
      const response = await Axios.post('/users/login', { email, password });
  
      console.log(response.data)
      localStorage.setItem("LoggedIn" , true)
      localStorage.setItem("token", response.data.token);
      return true;
  
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Not Authorized No Token.') {
          const errorMessage = error.response.data.message + ' Please Login First';
          alert(errorMessage);
        } else if (error.response.data.message === 'UnAuthorized Token.') {
          const errorMessage = "You don't have access to this page.";
          alert(errorMessage);
        } else {
          alert(error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
      
      return null; // Return null in case of an error
    }
  }

export const getProfile = async () => {

    try {
      const response = await Axios.get('/users/profile');
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

export const updateProfile = async (
                                firstname, 
                                lastname, 
                                email,
                                password,
                                Image,
                                phoneNumber,
  ) => {

    try {
      const response = await Axios.put('/users/profile',{firstname, 
        lastname, 
        email,
        password,
        Image,
        phoneNumber,});
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

export const DeleteProfile = async (Uid) => {

    try {
      const response = await Axios.delete(`/users/deleteUser/${Uid}`);
      return response.status;
  
  
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

export const getOneProfile = async (Uid) => {

    try {
      const response = await Axios.get(`/users/getSpecificUser/${Uid}`);
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
