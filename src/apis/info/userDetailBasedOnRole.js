const adminService = require("../../service/adminService");

const userDetailBasedOnRole = async (req, res) => {
    console.log("get started")
    let role = '';
    if (req.params.role === 'admin') {

        const { networkParticipant, adminTransaction, approvalPending } = await adminService.adminService();

        res.status(200).json({
            statusMessage: "Success",
            networkParticipant: networkParticipant,
            adminTransaction: adminTransaction,
            approvalPending: approvalPending
        });

    }

};

module.exports = userDetailBasedOnRole;