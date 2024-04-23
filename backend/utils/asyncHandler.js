const asyncHandler = (fn) => (req,res,next) => {
    try{
        fn(req,res,next);
    }
    catch(err){
        res.status(err.code || 500).json({
            success : false,
            message : err.message
        })
    }
}

// Alter approach

// const asyncHandler = (fn) => {
//     return (req,res,next) => {
//         Promise.resolve(fn(req,res,next)).catch((err) => next(err))
//     }
// }