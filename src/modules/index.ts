import auth from './auth';


const apiPrefix = '/api/v1'



const routes = (app:any) => {
    app.use(apiPrefix,auth)
    return app
};
export default routes;