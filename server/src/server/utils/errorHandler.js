module.exports=(err,req,res,next)=>{
    console.log("errorHandler - " + err);
    next(err);
};


