/*
* JS - однопоточный язык, поэтому ни о какой асинхронности тут не может идти и речи. Но при этом он весьма хорошо справляется с какими-то асинхронными вещами, по типу timeout или запросов на сервер. Всё эту стало доступно благодаря концепции event loop и тому как реализован call stack в JS
* */

const first = () => console.log('first')
const second = () => console.log('second')
const third = () => console.log('third')

first()
setTimeout(second, 0)
third()
