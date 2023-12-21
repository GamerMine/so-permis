@echo off

start cmd /k "cd backend && php spark serve"
start cmd /k "cd frontend && npm start"