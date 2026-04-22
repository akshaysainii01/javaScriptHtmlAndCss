let main=document.getElementById("main");
let arr=[
"https://i.pinimg.com/736x/24/a1/16/24a116afd8ec43374a8f3876f6b60eef.jpg",
"https://i.pinimg.com/736x/75/b6/1e/75b61ec92cf3733aa3a9f50eab5a4992.jpg",
"https://i.pinimg.com/736x/ac/50/e0/ac50e0afa9a0123aaa2b1f6cb3cbb9a1.jpg",
"https://i.pinimg.com/736x/ef/43/fc/ef43fc1923e2904d1007b3b8b7a2e509.jpg",
"https://i.pinimg.com/736x/97/ed/4e/97ed4eb2f8fa26e3658a4b0ddbcf0ff2.jpg",
"https://i.pinimg.com/736x/3c/66/18/3c66183c82db621e169b95e4ad3309d9.jpg",
"https://i.pinimg.com/736x/7a/03/7a/7a037a20b141f8deb88d6e53b5f5e103.jpg",
"https://i.pinimg.com/736x/b7/32/35/b732355a5187b0c88d135a30fc9f75e8.jpg",
]

let s="";

for(let i=1;i<=60;i++){
    let r=Math.floor(Math.random()*8);
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;

