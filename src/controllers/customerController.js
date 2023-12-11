const { uploadSingleFile } = require('../services/fileService');

const { createCustomerService } = require('../services/customerService');

module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        console.log('Test variable name: ', name, '---', address);

        let imageURL = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing else{}
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageURL = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageURL,
        };
        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            errorCode: 0,
            data: customer,
        });
    },
};
