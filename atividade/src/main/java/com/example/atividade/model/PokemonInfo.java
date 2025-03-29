package com.example.atividade.model;

import java.util.List;

public class PokemonInfo {
    private String name;
    private String imageUrl;
    private List<String> types;

    public PokemonInfo(String name, String imageUrl, List<String> types) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.types = types;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public List<String> getTypes() {
        return types;
    }
}