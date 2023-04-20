let myListOfObj = [
    {"img":"images/img1.jpg","name":"James Edith","position":"WEB DEVELOPER","desc":"Developing web is fun! you will learn how to create a carousel of reviews with a button that generates random reviews. This is a good feature to have on an ecommerce site to display customer reviews or a personal portfolio to display client reviews."},
    {"img":"images/img2.jpg","name":"Holy Mclean","position":"UX DESIGNER","desc":"UX Design is fun! you will learn how to create a carousel of reviews with a button that generates random reviews. This is a good feature to have on an ecommerce site to display customer reviews or a personal portfolio to display client reviews."},
    {"img":"images/img3.jpg","name":"Cassie Liu","position":"SOFTWARE ENGINEER","desc":"Developing software is fun! you will learn how to create a carousel of reviews with a button that generates random reviews. This is a good feature to have on an ecommerce site to display customer reviews or a personal portfolio to display client reviews."},
    {"img":"images/img4.jpg","name":"Susan Smith","position":"RESEARCHER","desc":"Researching is fun! you will learn how to create a carousel of reviews with a button that generates random reviews. This is a good feature to have on an ecommerce site to display customer reviews or a personal portfolio to display client reviews."},
    {"img":"images/img5.jpg","name":"Bruce Chen","position":"MANAGER","desc":"Management is fun! you will learn how to create a carousel of reviews with a button that generates random reviews. This is a good feature to have on an ecommerce site to display customer reviews or a personal portfolio to display client reviews."}
];
const len = myListOfObj.length;

const img = document.querySelector(".img");
const staffName = document.querySelector(".name");
const position = document.querySelector(".position");
const description = document.querySelector(".desc");
const operators = document.querySelectorAll(".jump");
const btn = document.querySelector(".btn");

function getRandomItem(){
    return Math.floor(Math.random()*len);
}

btn.addEventListener('click',function(){
    let index = getRandomItem();
    img.src=myListOfObj[index].img;
    staffName.textContent = myListOfObj[index].name;
    position.textContent = myListOfObj[index].position;
    description.textContent = myListOfObj[index].desc;
})

let tmp = -1;
operators.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const linkClasses = e.currentTarget.classList;
        for(let i=0; i<len;i++){
            if(myListOfObj[i].name == staffName.textContent){
              tmp = i;
              break;   
            }
        }
        
        let previous = tmp-1;
        let next = tmp+1;
        if(previous < 0){
            previous = len-1; 
        }
        if(next > (len-1)){
            next=0;
        }

        if(linkClasses.contains("previous")){
            img.src=myListOfObj[previous].img;
            staffName.textContent = myListOfObj[previous].name;
            position.textContent = myListOfObj[previous].position;
            description.textContent = myListOfObj[previous].desc;
        }else if(linkClasses.contains("next")){
            img.src=myListOfObj[next].img;
            staffName.textContent = myListOfObj[next].name;
            position.textContent = myListOfObj[next].position;
            description.textContent = myListOfObj[next].desc;
        }else{

        }
    });
})