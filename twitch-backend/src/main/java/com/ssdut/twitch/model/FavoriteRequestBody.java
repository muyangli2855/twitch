package com.ssdut.twitch.model;

import com.ssdut.twitch.db.entity.ItemEntity;

public record FavoriteRequestBody(
        ItemEntity favorite
) {}
