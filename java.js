const input1 = document.getElementById("input_num-1")
const input2 = document.getElementById("input_num-2")
const btnN = document.getElementById("btn")
const outputDiv = document.getElementById("result")
// const outputDiv = document.querySelector('div') // Получаем div для вывода результата

function sum(x, y){
   const result = x + y;
   return result
}

btnN.addEventListener("click", () => {
   // Получаем значения из инпутов и преобразуем их в числа
   const num1 = parseFloat(input1.value) || 0; // Если ввод пустой, используем 0
   const num2 = parseFloat(input2.value) || 0;
   
   // Складываем числа
   const res = sum(num1, num2)
   
   // Выводим результат в div после слова "Вывод:"
   outputDiv.innerHTML = `Вывод: ${res}`
   
   // Также выводим в консоль для проверки
   console.log(res)
})