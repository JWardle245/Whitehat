package com.example.restaurantsystem.service;

import com.example.restaurantsystem.model.Cart;
import com.example.restaurantsystem.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart getCart(Integer id) {
        return cartRepository.findById(id).get();
    }

    @Override
    public Cart updateCart(Cart cart, Integer id) {
        Cart existingCart = cartRepository.findById(id).get();
        existingCart.setItems(cart.getItems());
        existingCart.setQty(cart.getQty());
        return cartRepository.save(existingCart);
    }

    @Override
    public Cart addCart(Cart cart) {
        return cartRepository.save(cart);
    }
}