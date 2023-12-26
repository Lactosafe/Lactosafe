
const jsonfile = require('jsonfile');
const file = '/Users/vekum7/My Project/Lactosafe/client/data/data.json'

const fetchAdminDetail = async () => {

    let networkParticipant = {};
    let adminTransaction = {};
    let approvalPending = {};

    await jsonfile
        .readFile(file)
        .then((data) => {
            networkParticipant = {
                total: data.networkparticipant.length,
                participant: data.networkparticipant
            };
            adminTransaction = {
                total: data.adminTransaction.length,
                participant: data.adminTransaction
            }
            approvalPending = {
                total: data.approvalPending.length,
                name: data.approvalPending
            }
        })
        .catch((err) => {
            console.log(err);
        });

console.log('networkParticipant',networkParticipant)
    return {
        networkParticipant: networkParticipant,
        adminTransaction: adminTransaction,
        approvalPending: approvalPending
    };
};


module.exports = {
    fetchAdminDetail: fetchAdminDetail
};
