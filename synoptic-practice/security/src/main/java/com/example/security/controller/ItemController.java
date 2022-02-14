package com.example.security.controller;

import com.example.security.model.Item;
import com.example.security.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/items")
@CrossOrigin
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping("/add")
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
