FROM python:3.8-slim
WORKDIR /code

RUN pip install --upgrade pip 

COPY . .

RUN pip install -r requirements.txt

EXPOSE 8000
ENTRYPOINT [ "/bin/bash", "/code/entrypoint.sh"]