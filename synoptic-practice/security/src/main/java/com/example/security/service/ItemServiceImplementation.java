package com.example.security.service;

import com.example.security.model.Item;
import com.example.security.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImplementation implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item get(Integer id){
        return itemRepository.findById(id).get();
    }

    @Override
    public Item updateItem(Item item, Integer id) {
        Item existingItem = itemRepository.findById(id).get();
        existingItem.setName(item.getName());
        existingItem.setPrice(item.getPrice());
        return itemRepository.save(existingItem);
    }

    @Override
    public void delete(Integer id){
        itemRepository.deleteById(id);
    }
}
