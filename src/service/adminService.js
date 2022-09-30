const fetchdashboard = async () => {
    let participants1 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let participants2 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let participants3 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let participants4 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let networkParticipantsArr = [];
    networkParticipantsArr.push(participants1);
    networkParticipantsArr.push(participants2);
    networkParticipantsArr.push(participants3);
    networkParticipantsArr.push(participants4);

    let networkParticipant = {
        total: 4,
        participant: networkParticipantsArr
    }

    let trans1 = {
        name: 'addUser',
        date: '31/08/2022',
    }
    let trans2 = {
        name: 'updateUser',
        date: '21/08/2022',
    }
    let trans3 = {
        name: 'deleteUser',
        date: '01/09/2022',
    }

    let transArr = [];
    transArr.push(trans1);
    transArr.push(trans2);
    transArr.push(trans3);


    let adminTransaction = {
        total: 3,
        transactions: transArr
    }


    let pendingAprovals1 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let pendingAprovals2 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let pendingAprovals3 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }
    let pendingAprovals4 = {
        firstName: 'Adam',
        secondName: 'Gilchrist',
    }

    let pendingAprovalsArr = [];
    pendingAprovalsArr.push(pendingAprovals1);
    pendingAprovalsArr.push(pendingAprovals2);
    pendingAprovalsArr.push(pendingAprovals3);
    pendingAprovalsArr.push(pendingAprovals4);

    let approvalPending = {
        total: 4,
        name: pendingAprovalsArr
    }
    return {
        networkParticipant: networkParticipant,
        adminTransaction: adminTransaction,
        approvalPending: approvalPending
    };
};


module.exports = {
    fetchdashboard: fetchdashboard
};
