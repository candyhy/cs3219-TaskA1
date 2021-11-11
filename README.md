# cs3219-TaskA1

### Instructions:
Clone the Github Repository on your local machine.

```
git clone https://github.com/candyhy/cs3219-TaskA1.git
```

Navigate to the project directory.

```
cd cs3219-TaskA1
```

Build docker images:

```
docker-compose build
```

Serve webpage on localhost:

```
docker-compose up
```

Go to `http://localhost:8080` , a html page should be displayed: <br />
<b>Welcome</b> <br />
This is Candice's webpage.

Next, go to `http://localhost` , the reverse proxy for `localhost:8080` . The same page should be displayed.

### RESOURCE LINKS:
https://www.freecodecamp.org/news/docker-nginx-letsencrypt-easy-secure-reverse-proxy-40165ba3aee2
https://www.nginx.com/resources/wiki/start/topics/examples/full/
