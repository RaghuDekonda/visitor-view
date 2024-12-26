import axios from 'axios';

const VISITOR_S_API_BASE_URL = "http://localhost:8080/visitor";

class VisitorService {
    
    saveVisitor(visitor) {
        // Pass the visitor object as the second argument
        return axios.post(VISITOR_S_API_BASE_URL, visitor);
    }
    getVisitor(){
        return axios.get(VISITOR_S_API_BASE_URL);
    }
    getVisitorById(visitor_id){
        return axios.get(VISITOR_S_API_BASE_URL+"/"+visitor_id);
    }
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new VisitorService();