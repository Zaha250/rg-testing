FROM grafana/k6

WORKDIR /app

COPY . .

CMD ["run", "--out", "json=result.json", "start_test_script.js"]
