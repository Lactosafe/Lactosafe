

const fetchrole = async (req, res) => {
    console.log("get started")
    let role = '';
    if (req.params.email === 'pragati.mrinal@gmail.com') {
        role = 'admin'
    }

    res.status(200).json({
        statusMessage: "Success",
        role: role,
    });
};

module.exports = fetchrole;
