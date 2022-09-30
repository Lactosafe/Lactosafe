

const getSignup = async (req, res) => {
    console.log("started")

    res.status(200).json({
        statusMessage: "Success",
    });
};

module.exports = getSignup;
