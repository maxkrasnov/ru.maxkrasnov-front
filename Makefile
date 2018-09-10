# обрабатывает команду make dev - сделан для тестирования
dev:
	npm run development
# обрабатывает комнаду make run - запускает сборку проекта и устанавливает нужные зависимости
run:
	npm run production
# обрабатывает команду make deploy - запускает сборку докер контейнеров
deploy:
	docker-compose build
	docker-compose up
build
    npm run build
