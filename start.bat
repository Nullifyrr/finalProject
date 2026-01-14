@echo off
echo Starting Server
start http://localhost:3000
start python3 -m http.server 3000