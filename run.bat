@echo off
title Xbackup - Directory Backups
:start
cls
node dist/backup.js
set /p choice=Do you want to make another backup (X) or exit (C)? 
if /i "%choice%"=="X" goto start
pause
