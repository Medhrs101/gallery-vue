/* eslint-disable */
<template>
    <div class="gallery">
        <h1>My Gallery</h1>
        <div class="gallery-images">

            <div class="card" v-for="image in images" :key="image.id">
                <img :src="image.url" alt="image">
                <div class="container">
                    <span>image</span><br>
                    <span>short Description</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'gallery-list',
    data() {
        return {
            images: [],
        };
    },
    created() {
        this.getImages();
    },
    methods: {
        getImages() {
            axios
                .get('https://jsonplaceholder.typicode.com/photos?_limit=100')
                .then((response) => {
                    this.images = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style>
.gallery-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    margin-top: 20px;
    gap: 1rem;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    /* width: 40%; */
    flex-basis: 10rem;
    overflow: hidden;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}


.card img {
  width: 90%;
  height: 60%;
  object-fit: cover;
}
.container {
    padding: 2px 16px;
}
</style>