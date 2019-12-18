const express = require('express');
const router = express.Router();
const csvManager = require('../../module/csvManager');


router.get('/', async (req, res) => {
    try{

        //level2
        const groups = await csvManager.read("group.csv");
        const groupName = []
        groups.forEach(element => {
            groupName[element.groupIdx-1] = element.name
        });
        console.log(groupName)

        const members = await csvManager.read("member.csv");
        const memberInfo = []

        members.forEach(element => {
            var member = new Object()

            member.name = element.name;
            member.groupName = groupName[element.groupIdx-1];

            memberInfo.push(member)
        });

        res.status(200).send(memberInfo);

    }catch(err){
        console.log(`file err : ${err}`);
    }
});

router.get('/:groupIdx', async (req, res) => {
    try{
        const members = await csvManager.read("member.csv");
        const Idx = req.params.groupIdx;
        
        const groupMember = members.filter(element =>{
            return element.groupIdx == Idx;
        })

        res.status(200).send(groupMember);

    }catch(err){
        console.log(`file err : ${err}`);
    }
});

router.get('/mix', async (req,res) => {
    try{
        const members = await csvManager.read('member.csv');
        const mixedMembers = groupMixer.mix(members);
        
        res.status(200).send(mixedMembers);

    }catch(err){
        console.log(`file err : ${err}`);
    }

});


module.exports = router;