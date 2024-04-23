class ErrorHandler extends Error{
    constructor(statusCode, message = "Something went wrong", stack = ""){
        super(message);
        this.statusCode = statusCode;

        if(stack){
            this.stack = stack;
        }
        else{
            this.stack = Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default ErrorHandler;