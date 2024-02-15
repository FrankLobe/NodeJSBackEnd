import mongodb from 'mongodb';

const mongodbUrl = 'mongodb://localhost:27017/my_resume';
const mongodbName = 'my_resume';

export const getCertifications = async (request, response) => {
    try {
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('certification').find().toArray();
        response.status(200).json(contents[0]);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const getContact = async (request, response) => {
    try {
        const contactId = new mongodb.ObjectId(request.params.id);
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('contact').findOne({ _id: contactId });
        response.status(200).json(contents);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const getEducation = async (request, response) => {
    try {
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('education').find().toArray();
        response.status(200).json(contents[0]);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const getEmployment = async (request, response) => {
    try {
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('employment').find().toArray();
        response.status(200).json(contents[0]);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const getExperience = async (request, response) => {
    try {
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('experience').find().toArray();
        response.status(200).json(contents[0]);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const getSkill = async (request, response) => {
    try {
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('skill').find().toArray();
        response.status(200).json(contents[0]);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const getHome = async (request, response) => {
    try {
        const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
        const contents = await mongoClient.db(mongodbName).collection('home').find().toArray();
        response.status(200).json(contents[0]);
        mongoClient.close();
    } catch (error) {
        console.log(error);
    }
}

export const postContact = async (request, response) => {
    try {
        const contact = request.body.contact;
        const errorMessages = [];
        
        let contactId = "";

        if (contact.firstName === "") {
            errorMessages.push("First name  is a required value.");
        }

        if (contact.companyName === "") {
            errorMessages.push('Company name is a required value.');
        };
    
        if (contact.emailAddress === "" && contact.telephoneNumber === "") {
            errorMessages.push('Email address or telephone number is a required value.');
        };

        let status = "Success";

        if (errorMessages.length !== 0) {
            status = "Error";
        }

        if (status === "Success") {
            const mongoClient = await mongodb.MongoClient.connect(mongodbUrl);
            const db = mongoClient.db(mongodbName);
            const result = await db.collection('contact').insertOne(contact);

            contactId = result.insertedId;

            mongoClient.close();
        }

        response.status(200).json({ 
            status: status, 
            errorMessages: errorMessages,
            contactId,
            contact: contact
        });
    }
    catch (error) {
        console.log(error);
    }
}