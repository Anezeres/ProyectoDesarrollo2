FROM python:3.8-slim
WORKDIR /code

RUN pip install --upgrade pip 

COPY . .

RUN ls -a

RUN pwd

RUN pip install -r /code/requirements.txt

EXPOSE 8000
ENTRYPOINT [ "/bin/bash", "/code/entrypoint.sh"]