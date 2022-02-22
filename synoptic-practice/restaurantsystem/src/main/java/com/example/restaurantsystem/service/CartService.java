package com.example.restaurantsystem.service;

import com.example.restaurantsystem.model.Cart;

public interface CartService {
    public Cart getCart(Integer id);

    public Cart updateCart(Cart cart,Integer id);

    //Temp
    public Cart addCart(Cart cart);
}
