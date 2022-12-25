export const createError =(status, message) =>{
  const err=new Error();
  err.Status = 404;
  err.message = message;
  return err;

};