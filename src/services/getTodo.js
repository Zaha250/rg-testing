import http from 'k6/http';
import { check } from 'k6';

export function getOneTodo(todoId) {
    const todoResponse = http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todoResponseJson = todoResponse.json();

    const todoCheck = check(todoResponse, {
        "Получение todo по ID": (r) => r.status === 200,
        "Корректность todoId": (r) => todoResponseJson.id === todoId,
    });

    console.log({todoCheck});
}
