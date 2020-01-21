# envoy-external-authorization-demo
Showing how Envoy can utilize an external authorization deployment. 

What we have are three services:

- auth - Service for "external" autherization deployment
- envoy - Configurated envoy proxy https://www.envoyproxy.io/
- service - A deployment to log from behind the Envoy proxy

## How to Run
from root dir run this command

`docker-compose up`

### Curl Calls

Successful/authorized
`curl -H "Content-Type: application/json" --user "ricklee:123456"   localhost:80/service/1`

Failure/authorized
`curl -H "Content-Type: application/json" --user "ricklee:BAD"   localhost:80/service/1`
