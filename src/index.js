// write your code here
document.addEventListener('DOMContentLoaded', (event) => {

    fetch('http://localhost:3000/ramens') 
    .then(res => res.json())
    .then(resData => addImages(resData)); // returns an array with 5 objects

    // See all ramen images in the div with the id of ramen-menu. 
    function addImages(resData) {
        let whereToPutImage = document.getElementById("ramen-menu"); 
        resData.forEach(element => getImageOnPage(element));
            function getImageOnPage(resData) {
                let img = document.createElement('img');
                img.src = resData.image
                // console.log(img)
                whereToPutImage.append(img)
                
                    img.addEventListener('click', () => {
                        let whereToPutDetailImage = document.querySelector(".detail-image");
                        let detailImage = document.createElement('img');
                        let whereToPutName = document.querySelector(".name");
                        let name = document.createElement('p')
                        let restaurant = document.createElement('p')
                        let whereToPutRestaurant = document.querySelector(".restaurant")
                        detailImage.src = 
                        name.textContent = resData.name;
                        restaurant.textContent = resData.restaurant;



                        

                        whereToPutDetailImage.append(detailImage)
                        whereToPutName.append(name)
                        whereToPutRestaurant.append(restaurant)
                    
                
            })
            
            }    
    }

//     Click on an image from the `#ramen-menu`

// div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says













});
