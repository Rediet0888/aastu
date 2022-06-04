const Validation = (values) => {
    let errors={};
console.log(values.password.length , "tg")
    if(!values.username){
        errors.username="Name is required.";
    }
    if(!values.password){
        errors.password="Password is required";
     }
      else  if(values.password.length < 5){
        errors.password="passsword length must be more than 5.";
    }
  return errors;
    
};

export default Validation;
