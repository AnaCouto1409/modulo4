select pessoas.id, pessoas.nome,
sum(pedidos.quantidade)as total_itens
from pessoas
join pedidos
on pessoas.id =pedidos.pessoas_id
group by pessoas.id
order by total_itens desc limit 10;


//questao 2
 select customer_id, email,count(*) as "payments_count", cast(sum(amount)as float)
  as "total_amount"
 from customer natural join payment
 group by customer_id
 order by total_amount desc
 limit 10;

//questao3

const withdraw = amount => {
  array1 =[20,50,100];
  array2 =[100,150,200];
  array3 =[300,350,400];
  if(array1 == 20,50,100){
      console.log('Valor liberado para saque')
    }else{
        console.log('Notas indisponíveis!')
    }
};

//questao 3 

function withdraw (n){
  let change = [0,0,0]
  while (n >= 20){
    if(n % 50 ===0){break}
    n-=20
    change[2]++
  }
  while (n >= 100){
    n-=100
    change[0]++
}
while (n >= 50){
    n-=50
    change[1]++
}
return change
}







