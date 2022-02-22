package com.example.restaurantsystem.controller;

import com.example.restaurantsystem.model.Cart;
import com.example.restaurantsystem.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/{id}")
    public Cart getCart(@PathVariable Integer id){
        return cartService.getCart(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateCart(@RequestBody Cart cart, @PathVariable Integer id){
        cartService.updateCart(cart, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Temp
    @PostMapping("/")
    public ResponseEntity<Cart> addCart(@RequestBody Cart cart){
        cartService.addCart(cart);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
