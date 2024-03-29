package com.example.restaurantsystem.controller;

import com.example.restaurantsystem.model.Item;
import com.example.restaurantsystem.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping("/")
    public ResponseEntity<Item> add(@RequestBody Item item) {
        itemService.saveItem(item);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> update(@RequestBody Item item, @PathVariable Integer id){
        itemService.updateItem(item, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/")
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Item> delete(@PathVariable Integer id){
        itemService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
