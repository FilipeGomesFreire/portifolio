package com.example.atividade.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.json.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/info")
@CrossOrigin(origins = "*") // Habilita o frontend se comunicando
public class PokemonController {

    @GetMapping("/{id}")
    public ResponseEntity<PokemonInfo> getPokemonInfo(@PathVariable int id) {
        String url = "https://pokeapi.co/api/v2/pokemon-form/" + id;

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);

        JSONObject json = new JSONObject(result);
        String name = json.getString("name");
        String image = json.getJSONObject("sprites").getString("front_default");

        // Precisa buscar os tipos em outra rota:
        String fullDataUrl = "https://pokeapi.co/api/v2/pokemon/" + id;
        String fullData = restTemplate.getForObject(fullDataUrl, String.class);
        JSONObject fullJson = new JSONObject(fullData);
        JSONArray typesArray = fullJson.getJSONArray("types");

        List<String> types = new ArrayList<>();
        for (int i = 0; i < typesArray.length(); i++) {
            String typeName = typesArray.getJSONObject(i).getJSONObject("type").getString("name");
            types.add(typeName);
        }

        PokemonInfo info = new PokemonInfo(name, image, types);
        return ResponseEntity.ok(info);
    }
}
