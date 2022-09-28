const verify = (req, res, next) => {
    res.status(200).json('verified')
}

module.exports = verify;