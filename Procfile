web: gunicorn greenguide.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=greenguide worker --loglevel=info
beat: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=greenguide beat -S redbeat.RedBeatScheduler --loglevel=info
