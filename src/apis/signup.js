

const getSignup = async (req, res) => {

    res.status(200).json({
        statusMessage: "Success",
        email: req.body.email
    });
};

module.exports = getSignup;
