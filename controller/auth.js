export const loginUser = async (req, res) => {

    const { authType, email, phoneCode, phoneNumber } = req.body

    // const allUsers = await users.find({}).toArray();
    return res.send({ status: 'OK', data: 'done' });
}