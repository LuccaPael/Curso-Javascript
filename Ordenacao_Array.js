let economy = [
  {country: 'Brazil', pib:1,8},
  {country: 'USA', pib:18,6},
  {country: 'Japan', pib: 4,9},
  {country: 'China', pib: 11,2}
];

economy.sort((a,b) => {
  return a.pib - b.pib; 
})
             
console.log(economy);   

   
/*

 
1° Estados Unidos — US$ 18,6 trilhões;
2º China — US$ 11,2 trilhões;
3º Japão — US$ 4,9 trilhões;
4º Alemanha — US$ 3,4 trilhões;
5º Reino Unido — US$ 2,6 trilhões;
6º França — US$ 2,5 trilhões;
7º Índia  — US$ 2,2 trilhões;
8º Itália  — US$ 1,8 trilhão;
9º Brasil — US$ 1,8 trilhão;
10º Canadá — US$ 1,5 trilhão.
    
    
*/
