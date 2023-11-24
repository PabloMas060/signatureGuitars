module.exports = (req,res,next) => {
    if(req.cookies.userGuitars){
        req.session.userLogin = req.cookies.userGuitars
    }

    next()
}