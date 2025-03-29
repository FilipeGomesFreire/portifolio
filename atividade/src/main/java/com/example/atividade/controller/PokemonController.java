package com.example.atividade.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"https://portifolio-3exr.onrender.com", "http://localhost:3000"})
@RestController
@RequestMapping("/info")


public class PokemonController {

    // @GetMapping("/{id}")
    // public ResponseEntity<PokemonResponse> getPokemonInfo(@PathVariable String id) {
    //     String url = "https://pokeapi.co/api/v2/pokemon-form/" + id;
        
    //     RestTemplate restTemplate = new RestTemplate();
    //     PokeApiResponse response = restTemplate.getForObject(url, PokeApiResponse.class);
        
    //     if (response == null) {
    //         return ResponseEntity.notFound().build();
    //     }
        
    //     // Extrair os tipos
    //     List<String> types = new ArrayList<>();
    //     for (PokeApiType type : response.getTypes()) {
    //         types.add(type.getType().getName());
    //     }
        
    //     // Construir a resposta simplificada
    //     PokemonResponse pokemonResponse = new PokemonResponse();
    //     pokemonResponse.setName(response.getName());
    //     pokemonResponse.setImageUrl(response.getSprites().getFront_default());
    //     pokemonResponse.setTypes(types);
        
    //     return ResponseEntity.ok(pokemonResponse);
    // }

    @GetMapping("/info/{id}")
@CrossOrigin(origins = {"https://portifolio-3exr.onrender.com", "http://localhost:3000"})
public ResponseEntity<PokemonResponse> getPokemonInfo(@PathVariable String id) {
    try {
        // Configura timeout para a chamada à PokeAPI
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
        factory.setConnectTimeout(5000); // 5 segundos
        factory.setReadTimeout(5000);
        
        RestTemplate restTemplate = new RestTemplate(factory);
        
        String url = "https://pokeapi.co/api/v2/pokemon-form/" + id;
        PokeApiResponse response = restTemplate.getForObject(url, PokeApiResponse.class);
        
        // ... resto do seu código
    } catch (ResourceAccessException ex) {
        return ResponseEntity.status(504).build(); // Gateway Timeout
    }
}
    
    // Classes para mapear a resposta da PokeAPI
    private static class PokeApiResponse {
        private String name;
        private Sprites sprites;
        private List<PokeApiType> types;
        
        // Getters e Setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public Sprites getSprites() { return sprites; }
        public void setSprites(Sprites sprites) { this.sprites = sprites; }
        public List<PokeApiType> getTypes() { return types; }
        public void setTypes(List<PokeApiType> types) { this.types = types; }
    }
    
    private static class Sprites {
        private String front_default;
        
        // Getters e Setters
        public String getFront_default() { return front_default; }
        public void setFront_default(String front_default) { this.front_default = front_default; }
    }
    
    private static class PokeApiType {
        private Type type;
        
        // Getters e Setters
        public Type getType() { return type; }
        public void setType(Type type) { this.type = type; }
    }
    
    private static class Type {
        private String name;
        
        // Getters e Setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
    }
    
    // Classe para a resposta simplificada
    private static class PokemonResponse {
        private String name;
        private String imageUrl;
        private List<String> types;
        
        // Getters e Setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getImageUrl() { return imageUrl; }
        public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
        public List<String> getTypes() { return types; }
        public void setTypes(List<String> types) { this.types = types; }
    }
}