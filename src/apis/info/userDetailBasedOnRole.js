const adminService = require("../../service/adminService");
const farmerService = require("../../service/farmerService");

const userDetailBasedOnRole = async (req, res) => {
    console.log("get started")
    let role = '';
    if (req.params.role === 'admin') {

        const { networkParticipant, adminTransaction, approvalPending } = await adminService.fetchAdminDetail();

        res.status(200).json({
            statusMessage: "Success",
            networkParticipant: networkParticipant,
            adminTransaction: adminTransaction,
            approvalPending: approvalPending
        });

    }
    if (req.params.role === 'farmer') {

        const { networkParticipant, adminTransaction, approvalPending } = await farmerService.fetchfarmerDetail();

        res.status(200).json({
            statusMessage: "Success",
            networkParticipant: networkParticipant,
            adminTransaction: adminTransaction,
            approvalPending: approvalPending
        });

    }

};

module.exports = userDetailBasedOnRole;