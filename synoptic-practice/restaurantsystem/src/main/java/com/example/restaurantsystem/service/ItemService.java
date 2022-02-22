package com.example.restaurantsystem.service;

import com.example.restaurantsystem.model.Item;

import java.util.List;

public interface ItemService {
    public Item saveItem(Item item);

    public List<Item> getAllItems();

    public Item get(Integer id);

    public Item updateItem(Item item, Integer id);

    public void delete(Integer id);
}
