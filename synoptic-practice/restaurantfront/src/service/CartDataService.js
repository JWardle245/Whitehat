import axios from 'axios';
import AuthenticationService from '../service/AuthenticationService';

const API_URL = 'http://localhost:8080'

class CartDataService {

    retrieveCart(id) {
        return axios.get(`${API_URL}/cart/${id}`);
    }

    updateCart(id, items, qty) {
        return axios.put(`${API_URL}/cart/${id}`,
            {
                "id": id,
                "items": items,
                "qty": qty
            }
        );
    }
}

export default new CartDataService()