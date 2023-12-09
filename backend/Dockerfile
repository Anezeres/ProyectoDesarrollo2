FROM python:3.8-slim
WORKDIR /code

RUN pip install --upgrade pip 

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
ENTRYPOINT [ "/bin/bash", "/code/entrypoint.sh"]