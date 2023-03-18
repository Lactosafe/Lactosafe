

const fetchrole = async (req, res) => {
    console.log("get started")
    let role = '';
    if (req.query.email === 'pragati.mrinal@gmail.com') {
        role = 'admin'
    }

    res.status(200).json({
        statusMessage: "Success",
        role: role,
    });
};

module.exports = fetchrole;
