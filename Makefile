# обрабатывает команду make dev - сделан для тестирования
dev:
	npm run development
# обрабатывает комнаду make run - запускает сборку проекта и устанавливает нужные зависимости
run:
	npm run production
# обрабатывает команду make deploy - запускает сборку докер контейнеров
deploy:
    ifeq ($(APP_VERSION),)
    APP_VERSION := 0
    endif
	docker-compose build
	export APP_VERSION=$(APP_VERSION)&&docker-compose up -d
build:
	npm run build
