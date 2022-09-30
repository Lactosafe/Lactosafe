const viewadmin = async (req, res) => {
    console.log("get started")

    res.status(200).json({
        statusMessage: "Success",
    });
};

module.exports = viewadmin;