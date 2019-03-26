module.exports=(err,req,res,next)=>{
    console.log("errorHandler - " + err);
    //res.status(err.status).send(err);
    next(err);


};


