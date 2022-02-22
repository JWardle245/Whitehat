import axios from 'axios'
import AuthenticationService from '../service/AuthenticationService';

const API_URL = 'http://localhost:8080'

class ItemDataService {

    retrieveAllItems() {
        return axios.get(`${API_URL}/items/`);
    }

    addItem(name, price) {
        return axios.post(`${API_URL}/items/`,
            {
                "name": name,
                "price": parseInt(price)
            },
            { headers: { authorization: AuthenticationService.getAuthToken() } }
        );
    }

    saveItem(id, name, price) {
        if (id == -2) { // When adding a new item
            return axios.post(`${API_URL}/items/`,
                {
                    "name": name,
                    "price": parseInt(price)
                },
                { headers: { authorization: AuthenticationService.getAuthToken() } }
            );
        }
        else { // When updating an existing item
            return axios.put(`${API_URL}/items/${id}`,
                {
                    "name": name,
                    "price": parseInt(price)
                },
                { headers: { authorization: AuthenticationService.getAuthToken() } }
            );
        }
        
    }

    deleteItem(id) {
        return axios.delete(`${API_URL}/items/${id}`,
            { headers: { authorization: AuthenticationService.getAuthToken() } }
        );
    }
}

export default new ItemDataService()