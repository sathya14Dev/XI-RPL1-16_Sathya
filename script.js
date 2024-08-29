const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xa9bt8CaM5b7lpu6H4M09bYMsCwAe-DXnQ&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfj1Mltc-92Ll44n0XTIWxDYgWcGzlTMHtlQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEFQgXgxPmJU0tsxtHC6WZ_4Ej3dravbjiw&s"];
const songs = ["JKT48 - Ingatan Kosmos (Cosmos no Kioku) Color Coded Lyrics.mp3", 
               "Eureka Milik Kita.mp3",
               "HEAVY ROTATION - JKT48 (Liriik Video).mp3"]; // 
        let currentIndex = 0; //

        function changeSong() {
            currentIndex = (currentIndex + 1) % images.length;
            
            const albumArt = document.getElementById('albumArt');
            albumArt.src = images[currentIndex];

            const audioPlayer = document.getElementById('audioPlayer');
            const audioSource = document.getElementById('audioSource');
            audioSource.src = songs[currentIndex];
            
            audioPlayer.load();
        }