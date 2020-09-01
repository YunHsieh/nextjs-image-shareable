import axios from 'axios';

// Implement all apis transport
class ClientTransport {
    constructor(){
      this.DOMAIN_GATEWAY = process.env.IMAGE_SHAREABLE_DOMAIN_GATEWAY || 'http://localhost:3000';

      this.landspaceBasePath = process.env.IMAGE_SHAREABLE_DOMAIN_GATEWAY===undefined? '' :`/landscape`;
      
      this.landspaceRequest = axios.create({
        baseURL: `${this.DOMAIN_GATEWAY}${this.landspaceBasePath}`,
        timeout: 1000,
        headers: {'X-Custom-Header': 'myToken'}
      });
    }
    
    async fetchBase(request){
      try{
        // return request
        const responstData = await this.landspaceRequest({
          ...request
        });
        if (responstData && responstData.data){
          return responstData
        } else {
          // TODO return the error message
        }
        
      }catch ( error ){
        // TODO catch the Exceptions error message
      }
  }
}

export default new ClientTransport({});
