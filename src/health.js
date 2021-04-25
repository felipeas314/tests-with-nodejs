async function health(req,res){
    res.status(200).json({
        status: 'OK',
        date: new Date(),
        message: 'Server UP'
    })
}

module.exports = {
    health
}