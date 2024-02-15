import express from 'express';
import {
    getCertifications,
    getContact,
    getEducation,
    getEmployment,
    getExperience,
    getSkill,
    getHome,
    postContact
} from '../controllers/api_controllers.js';

const apiRouter = express.Router();

apiRouter.get('/certification', getCertifications);
apiRouter.get('/contact/:id', getContact);
apiRouter.get('/education', getEducation);
apiRouter.get('/employment', getEmployment);
apiRouter.get('/experience', getExperience);
apiRouter.get('/skill', getSkill);
apiRouter.get('/', getHome);

apiRouter.post('/contact', postContact);

export default apiRouter;
